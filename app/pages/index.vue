<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm">
      <nav
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center"
      >
        <h1 class="text-2xl font-bold text-gray-900">TaskManager</h1>
        <div class="space-x-4">
          <NuxtLink to="/login" class="text-gray-600 hover:text-gray-900"
            >Login</NuxtLink
          >
          <NuxtLink
            to="/register"
            class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >Get Started</NuxtLink
          >
        </div>
      </nav>
    </header>

    <main>
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 class="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
          Manage Your Tasks Effortlessly
        </h2>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Stay organized and productive with our intuitive task management
          platform. Track, prioritize, and complete your goals.
        </p>
        <div class="space-x-4">
          <NuxtLink
            to="/register"
            class="px-8 py-3 bg-indigo-600 text-white text-lg rounded-lg hover:bg-indigo-700"
            >Start Free</NuxtLink
          >
          <NuxtLink
            to="/tasks"
            class="px-8 py-3 border border-gray-300 text-gray-700 text-lg rounded-lg hover:bg-gray-50"
            >View Demo</NuxtLink
          >
        </div>
      </section>

      <section class="bg-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 class="text-3xl font-bold text-center text-gray-900 mb-12">
            Features
          </h3>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="p-6 bg-gray-50 rounded-xl">
              <div
                class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4"
              >
                <svg
                  class="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h4 class="text-xl font-semibold mb-2">Task Tracking</h4>
              <p class="text-gray-600">
                Create and organize tasks with ease. Keep track of what needs to
                be done.
              </p>
            </div>
            <div class="p-6 bg-gray-50 rounded-xl">
              <div
                class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4"
              >
                <svg
                  class="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 class="text-xl font-semibold mb-2">Quick Actions</h4>
              <p class="text-gray-600">
                Mark tasks complete, set priorities, and update status in just a
                click.
              </p>
            </div>
            <div class="p-6 bg-gray-50 rounded-xl">
              <div
                class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4"
              >
                <svg
                  class="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 class="text-xl font-semibold mb-2">Stay on Schedule</h4>
              <p class="text-gray-600">
                Set due dates and get reminded before deadlines approach.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-gray-900 text-gray-400 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; 2025 TaskManager. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
test
