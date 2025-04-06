import React from 'react';

const Nutrition = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-lime-100 px-6 py-10 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-green-700 mb-10">
          🥗 Healthy Nutrition
        </h1>

        <h2 className="text-2xl font-semibold text-lime-800 mb-6">
          🌟 Essential Foods and Drinks for Health & Wellness
        </h2>

        {[
          {
            title: '1. Whole Grains (Fiber and Nutrients)',
            goal: 'Provide long-lasting energy and fiber for digestion.',
            examples: 'Brown rice, quinoa, oats, whole wheat bread, barley.',
            benefits:
              'Rich in fiber, helps maintain healthy blood sugar levels, supports heart health.',
          },
          {
            title: '2. Lean Proteins (Muscle Building and Repair)',
            goal: 'Promote muscle repair and growth.',
            examples:
              'Chicken breast, turkey, fish (salmon, tuna), eggs, legumes (lentils, chickpeas), tofu, quinoa.',
            benefits:
              'Supports muscle growth, repair, and overall body function.',
          },
          {
            title: '3. Healthy Fats (Brain and Heart Health)',
            goal: 'Maintain a healthy heart and support brain function.',
            examples:
              'Avocados, olive oil, nuts (almonds, walnuts), seeds (chia, flax), fatty fish (salmon, sardines).',
            benefits:
              'Helps reduce inflammation, supports brain health, improves skin quality.',
          },
          {
            title: '4. Fruits and Vegetables (Vitamins, Minerals, and Antioxidants)',
            goal: 'Boost immunity, support skin health, and prevent chronic diseases.',
            examples:
              'Berries, leafy greens, citrus fruits, tomatoes, bell peppers, carrots.',
            benefits:
              'Rich in vitamins, minerals, and antioxidants that support overall health.',
          },
          {
            title: '5. Dairy or Alternatives (Bone Health)',
            goal: 'Provide calcium and vitamin D for strong bones and teeth.',
            examples: 'Greek yogurt, cheese, almond/soy/oat milk, tofu.',
            benefits: 'Supports bone health, provides probiotics for gut health.',
          },
          {
            title: '6. Hydration (Water and Healthy Drinks)',
            goal:
              'Keep the body hydrated, support metabolic functions, and maintain energy levels.',
            examples:
              'Water, herbal teas (green tea, peppermint), coconut water, fresh juices.',
            benefits:
              'Supports digestion, boosts energy, aids in detoxification, and improves skin health.',
          },
          {
            title: '7. Foods to Limit or Avoid',
            goal: 'Minimize foods that can hinder overall health and wellness.',
            examples:
              'Processed foods, sugary drinks, refined carbs, excessive alcohol, fried foods.',
            benefits:
              'These foods contribute to weight gain, inflammation, and chronic diseases.',
          },
        ].map((section, index) => (
          <section
            key={index}
            className="mb-6 bg-white rounded-2xl shadow-md p-6 border-l-4 border-green-300 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-bold text-green-700 mb-2">{section.title}</h3>
            <p>
              <span className="font-medium text-gray-700">Goal:</span> {section.goal}
            </p>
            <p>
              <span className="font-medium text-gray-700">Examples:</span> {section.examples}
            </p>
            <p>
              <span className="font-medium text-gray-700">Benefits:</span> {section.benefits}
            </p>
          </section>
        ))}

        <h2 className="text-2xl font-semibold text-lime-800 mt-10 mb-4">
          🧠 Healthy Meal Plan Tips
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Include colorful fruits and veggies in every meal.</li>
          <li>Choose whole grains over refined ones for more fiber.</li>
          <li>Opt for lean proteins like chicken, fish, and legumes.</li>
          <li>Use olive oil and avocado for healthy fat sources.</li>
          <li>Stay hydrated by drinking water throughout the day.</li>
          <li>Avoid snacks with added sugars and processed ingredients.</li>
        </ul>

        <p className="mt-6 text-lg text-gray-800">
          ✅ By following these nutrition guidelines, you support your energy, focus, and overall health. Your body will thank you!
        </p>
      </div>
    </div>
  );
};

export default Nutrition;
