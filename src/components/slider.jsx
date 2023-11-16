let sliderContainerWidth;  

export const sliderFunction = () => {
  const sliderContainer = document.getElementById("sliderContainer");
  const slider = document.getElementById("slider");
  const cards = slider.getElementsByTagName("li");

  let elementsToShow = 3;
  if (document.body.clientWidth < 1000) {
    elementsToShow = 1;
  }

  sliderContainerWidth = sliderContainer.clientWidth;  

  slider.style.width = `${cards.length * (sliderContainerWidth / elementsToShow)}px`;

  for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.style.width = `${sliderContainerWidth / elementsToShow}px`;
  }
};

export const prev = () => {
  const slider = document.getElementById("slider");
  const elementsToShow = 3;

  const cardWidth = sliderContainerWidth / elementsToShow;  

  let newMarginLeft = +slider.style.marginLeft.slice(0, -2) + cardWidth;

  // Ajuste para evitar el problema del hueco al volver al principio
  if (newMarginLeft > 0) {
    newMarginLeft = 0;
  }

  slider.style.marginLeft = `${newMarginLeft}px`;
  sliderFunction();

  // Deshabilitar botón prev si estamos en la primera tarjeta
  const prevButton = document.getElementById("prevButton");
  const isFirstCard = newMarginLeft === 0;
  prevButton.disabled = isFirstCard;

  // Habilitar botón next (ya que estamos retrocediendo)
  const nextButton = document.getElementById("nextButton");
  nextButton.disabled = false;
};

export const next = () => {
  const slider = document.getElementById("slider");
  const elementsToShow = 3;

  const cardWidth = sliderContainerWidth / elementsToShow;  

  const maxMarginLeft = -cardWidth * (slider.children.length - elementsToShow);
  let newMarginLeft = +slider.style.marginLeft.slice(0, -2) - cardWidth;

  // Ajuste para evitar el problema del hueco al volver al final
  if (newMarginLeft < maxMarginLeft) {
    newMarginLeft = maxMarginLeft;
  }

  slider.style.marginLeft = `${newMarginLeft}px`;
  sliderFunction();

  // Deshabilitar botón next si estamos en la última tarjeta
  const nextButton = document.getElementById("nextButton");
  const isLastCard = newMarginLeft === maxMarginLeft;
  nextButton.disabled = isLastCard;

  // Habilitar botón prev (ya que estamos avanzando)
  const prevButton = document.getElementById("prevButton");
  prevButton.disabled = false;
};
