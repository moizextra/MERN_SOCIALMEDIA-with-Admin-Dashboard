import React from 'react'

const UserProfile = () => {
  return (
    <div class="container mx-auto p-4">
    <div class="bg-white p-8 rounded-lg shadow-md">
        <div class="flex justify-center mb-4">
            <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile Picture" class="w-20 h-20 rounded-full"/>
        </div>
        
        <div class="text-center mb-4">
            <h2 class="text-xl font-semibold">Your Name</h2>
            <p class="text-gray-500">@username</p>
        </div>

        <div class="text-center mb-6">
            <button class="bg-gray-500 text-white px-4 py-2 rounded-xl">Edit Profile</button>
        </div>

        <div class="flex justify-around text-gray-600">
            <div>
                <p class="text-lg font-semibold">500</p>
                <p>Posts</p>
            </div>
            <div>
                <p class="text-lg font-semibold">1.5k</p>
                <p>Followers</p>
            </div>
            <div>
                <p class="text-lg font-semibold">800</p>
                <p>Following</p>
            </div>
        </div>
    </div>

    <div class="mt-8">
        <div class="bg-white p-4 mb-4 rounded-lg shadow-md">
            <p>This is a sample post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>


    </div>
</div>
  )
}

export default UserProfile