function Testimonials() {
  return (
    <section
      id="testimonials"
      className="pt-20 pb-20 px-6"
    >
      <div className="w-[90%] max-w-[1200px] mx-auto text-center">

        <p className="text-gray-400 tracking-[0.4em] uppercase mb-4">
          Testimonials
        </p>

        <h2 className="text-6xl md:text-7xl font-black gradient-text">
          What People Say
        </h2>

        <div className="mt-6 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>

        <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl">

          <div className="text-7xl mb-6">
            ❤️
          </div>

          <h3 className="text-4xl font-bold mb-4">
            Testimonials Coming Soon
          </h3>

          <p className="text-gray-400 text-xl leading-8">
            Client feedback, collaboration reviews and professional recommendations will appear here in the future.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;