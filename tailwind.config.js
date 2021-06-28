module.exports = {
  darkMode: "class",
  purge: {
    content: [
      "./src/**/*.{svelte,js,ts}",
    ],
    options: {
      safelist: [
        /data-theme$/,
        [ 'info', 'success', 'warning', 'error', 'blue' ],
      ]
    },
  },

  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/line-clamp"), require('daisyui')],

  daisyui: {
    styled: true,
    themes: [
      {
        'tutors': {
          'primary': '#3b82f6',
          'primary-focus': '#234d92',
          'primary-content': '#ffffff',
          'secondary': '#cb31b8',
          'secondary-focus': '#68195f',
          'secondary-content': '#ffffff',
          'accent': '#33d447',
          'accent-focus': '#21a92e',
          'accent-content': '#ffffff',
          'neutral': '#434656',
          'neutral-focus': '#383b48',
          'neutral-content': '#ffffff',
          'base-100': '#f2f3f5',
          'base-200': '#E5E7EB',
          'base-300': '#f2f3f5',
          'base-content': '#1f2937',
          'info': '#63c2f7',
          'success': '#32d276',
          'warning': '#f1ab3a',
          'error': '#dc3835',
        },
      },  'light', 'dark', 'black', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'lofi', 'pastel', 'dracula', 'wireframe',
    ],
  },

  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },

};
