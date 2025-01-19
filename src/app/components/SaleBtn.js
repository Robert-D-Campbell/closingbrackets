const SaleBtn = () => {
  return (
    <div
      id="glowing-button-area"
      className="glowing-button-area max-w-max fixed bottom-5 right-3 md:right-6 flex flex-col justify-center items-center overflow-hidden p-[3px] rounded-lg"
    >
      <div className="block m-auto rounded-full glowing-button-gradient"></div>
      <div className="flex relative justify-center items-center px-6 py-3 rounded-lg glowing-button-inner">
        <a
          href="https://themeforest.net/item/closingbrackets-ai-deep-search-technology-startup-agency-react-template/53649239"
          target="_blank"
          className="inline-block text-base capitalize glowing-button text-w-900"
        >
          Get closingbrackets For $29
        </a>
        <div className="rounded-lg glowing-button-inner-overlay bg-[#000]"></div>
      </div>
    </div>
  );
};

export default SaleBtn;
