<script setup lang="ts">
const config = useRuntimeConfig();

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  todo_img: string | null;
  created_at: string;
  updated_at: string;
};

const {
  data: tasks,
  pending,
  error,
  refresh,
} = await useFetch<Task[]>('/todos/', {
  baseURL: config.public.apiBase,
  lazy: true,
  default: () => [],
});

const searchQuery = ref('');

const filteredTasks = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  const list = tasks.value ?? [];
  if (!q) return list;
  return list.filter((t) => {
    const title = (t.title ?? '').toLowerCase();
    const desc = (t.description ?? '').toLowerCase();
    return title.includes(q) || desc.includes(q);
  });
});

const errorDetails = computed(() => {
  if (!error.value) return null;
  const e: any = error.value;
  return {
    statusCode: e.statusCode ?? e.status ?? null,
    statusMessage: e.statusMessage ?? null,
    message: e.message ?? String(e),
    data: e.data ?? null,
  };
});

function taskImageUrl(task: Task) {
  if (!task.todo_img) return null;
  try {
    return new URL(task.todo_img, config.public.djangoBase).toString();
  } catch {
    return task.todo_img;
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-900">TaskManager</h1>
        <div class="space-x-4">
          <NuxtLink to="/login" class="text-gray-600 hover:text-gray-900">Logout</NuxtLink>
        </div>
      </nav>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex items-center gap-3">
          <h2 class="text-2xl font-bold text-gray-900">Tasks</h2>
          <span v-if="!pending && !error" class="text-sm text-gray-500">
            {{ filteredTasks.length }} / {{ tasks.length }}
          </span>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end sm:gap-4">
          <div class="w-full sm:w-80">
            <label class="sr-only" for="task-search">Search tasks</label>
            <input
              id="task-search"
              v-model="searchQuery"
              type="search"
              placeholder="Search by title or description..."
              class="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
            />
          </div>

          <button class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Add Task</button>
        </div>
      </div>

      <div v-if="pending" class="text-center py-8">
        <p class="text-gray-500">Loading...</p>
      </div>

      <div v-else-if="error" class="text-center py-8">
        <p class="text-red-500">Failed to load tasks</p>
        <pre
          v-if="errorDetails"
          class="mt-3 mx-auto max-w-2xl text-left text-xs bg-red-50 text-red-900 border border-red-200 rounded p-3 overflow-auto"
          >{{ errorDetails }}</pre
        >
        <button @click="refresh()" class="mt-2 text-indigo-600 hover:text-indigo-900">Retry</button>
      </div>

      <div v-else-if="filteredTasks.length === 0" class="text-center py-10 bg-white rounded-lg shadow">
        <p class="text-gray-600">No tasks found.</p>
        <button
          v-if="searchQuery.trim()"
          class="mt-3 text-indigo-600 hover:text-indigo-900 text-sm"
          @click="searchQuery = ''"
        >
          Clear search
        </button>
      </div>

      <div v-else class="bg-white rounded-lg shadow overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                SN
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(task, index) in filteredTasks" :key="task.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ index + 1 }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ task.title }}</td>
              <td class="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">{{ task.description }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <img
                  v-if="taskImageUrl(task)"
                  :src="taskImageUrl(task)!"
                  alt="Task image"
                  class="h-12 w-12 object-cover rounded"
                />
                <span v-else class="text-gray-400 text-sm">No image</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm">
                <button class="text-indigo-600 hover:text-indigo-900 mr-3">View Details</button>
                <button class="text-yellow-600 hover:text-yellow-900 mr-3">Update</button>
                <button class="text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>
