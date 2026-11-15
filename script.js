
const movies = [
  {
    id: 1,
    title: "Interestelar",
    genre: "Ficção",
    year: 2014,
    rating: 8.7,
    duration: "2h 49min",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description: "Em um futuro em que a Terra enfrenta uma crise, um grupo de exploradores parte em uma missão espacial em busca de um novo lar para a humanidade."
  },
  {
    id: 2,
    title: "A Origem",
    genre: "Ação",
    year: 2010,
    rating: 8.8,
    duration: "2h 28min",
    image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    description: "Um especialista em invadir sonhos recebe uma missão desafiadora: implantar uma ideia na mente de uma pessoa."
  },
  {
    id: 3,
    title: "Titanic",
    genre: "Romance",
    year: 1997,
    rating: 7.9,
    duration: "3h 14min",
    image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    description: "Dois jovens de realidades diferentes se conhecem a bordo de um navio em uma viagem que mudará suas vidas."
  },
  {
    id: 4,
    title: "Oppenheimer",
    genre: "Drama",
    year: 2023,
    rating: 8.3,
    duration: "3h",
    image: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    description: "A história do físico J. Robert Oppenheimer e seu papel no desenvolvimento de uma das maiores descobertas científicas da história."
  },
  {
    id: 5,
    title: "Corra!",
    genre: "Terror",
    year: 2017,
    rating: 7.7,
    duration: "1h 44min",
    image: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    description: "Um jovem visita a família de sua namorada e percebe que existe algo muito estranho naquele lugar."
  },
  {
    id: 6,
    title: "Vingadores: Ultimato",
    genre: "Ação",
    year: 2019,
    rating: 8.4,
    duration: "3h 1min",
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    description: "Os heróis sobreviventes precisam encontrar uma maneira de restaurar o equilíbrio do universo."
  },
  {
    id: 7,
    title: "De Repente 30",
    genre: "Comédia",
    year: 2004,
    rating: 6.2,
    duration: "1h 38min",
    image: "https://image.tmdb.org/t/p/w500/i4IuVMc6k4R9Q9k1Kp9cZ7z0l5A.jpg",
    description: "Uma adolescente acorda misteriosamente no corpo de sua versão adulta e precisa descobrir o que realmente importa."
  },
  {
    id: 8,
    title: "A Culpa é das Estrelas",
    genre: "Romance",
    year: 2014,
    rating: 7.7,
    duration: "2h 6min",
    image: "https://image.tmdb.org/t/p/w500/ep7dF4QR4Mm39LI958V0XbwE0hK.jpg",
    description: "Dois adolescentes se conhecem em um grupo de apoio e desenvolvem uma conexão especial."
  },
  {
    id: 9,
    title: "Invocação do Mal",
    genre: "Terror",
    year: 2013,
    rating: 7.5,
    duration: "1h 52min",
    image: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    description: "Investigadores paranormais são chamados para ajudar uma família que enfrenta acontecimentos assustadores."
  },
  {
    id: 10,
    title: "Duna",
    genre: "Ficção",
    year: 2021,
    rating: 8.0,
    duration: "2h 35min",
    image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    description: "Em um planeta desértico, um jovem precisa enfrentar desafios que podem mudar o destino de toda a humanidade."
  },
  {
    id: 11,
    title: "O Diabo Veste Prada",
    genre: "Comédia",
    year: 2006,
    rating: 6.9,
    duration: "1h 49min",
    image: "https://image.tmdb.org/t/p/w500/8912AsVuS7Sj915apArUFbv6F9L.jpg",
    description: "Uma jovem jornalista consegue um emprego em uma importante revista de moda e precisa enfrentar uma chefe exigente."
  },
  {
    id: 12,
    title: "Forrest Gump",
    genre: "Drama",
    year: 1994,
    rating: 8.8,
    duration: "2h 22min",
    image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    description: "Um homem simples vive acontecimentos extraordinários enquanto atravessa diferentes momentos da história americana."
  },
  {
    id: 13,
    title: "John Wick",
    genre: "Ação",
    year: 2014,
    rating: 7.4,
    duration: "1h 41min",
    image: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    description: "Um antigo assassino profissional acaba envolvido novamente em um perigoso mundo que pensava ter deixado para trás."
  },
  {
    id: 14,
    title: "Como Eu Era Antes de Você",
    genre: "Romance",
    year: 2016,
    rating: 7.4,
    duration: "1h 50min",
    image: "https://image.tmdb.org/t/p/w500/Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg",
    description: "Uma jovem começa a trabalhar como cuidadora e desenvolve uma amizade inesperada com um homem que teve sua vida transformada."
  },
  {
    id: 15,
    title: "O Iluminado",
    genre: "Terror",
    year: 1980,
    rating: 8.4,
    duration: "2h 26min",
    image: "https://image.tmdb.org/t/p/w500/xazWoLealQwEgqZ89MLZklLZD3k.jpg",
    description: "Uma família passa uma temporada isolada em um hotel, onde acontecimentos misteriosos começam a ocorrer."
  },
  {
    id: 16,
    title: "Free Guy",
    genre: "Comédia",
    year: 2021,
    rating: 7.1,
    duration: "1h 55min",
    image: "https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
    description: "Um personagem de videogame descobre que vive dentro de um jogo e decide mudar sua própria história."
  },
  {
    id: 17,
    title: "Coringa",
    genre: "Drama",
    year: 2019,
    rating: 8.2,
    duration: "2h 2min",
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    description: "A trajetória de um homem que enfrenta dificuldades pessoais enquanto sua vida toma um rumo inesperado."
  },
  {
    id: 18,
    title: "Homem-Aranha: Sem Volta Para Casa",
    genre: "Ação",
    year: 2021,
    rating: 8.2,
    duration: "2h 28min",
    image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    description: "Peter Parker enfrenta consequências inesperadas depois que sua identidade é revelada ao mundo."
  },
  {
    id: 19,
    title: "La La Land",
    genre: "Romance",
    year: 2016,
    rating: 7.9,
    duration: "2h 8min",
    image: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    description: "Uma atriz e um músico tentam realizar seus sonhos enquanto descobrem os desafios de um relacionamento."
  },
  {
    id: 20,
    title: "Perdido em Marte",
    genre: "Ficção",
    year: 2015,
    rating: 8.0,
    duration: "2h 24min",
    image: "https://image.tmdb.org/t/p/w500/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg",
    description: "Após um acidente durante uma missão espacial, um astronauta precisa encontrar uma maneira de sobreviver em Marte."
  }
];

// ELEMENTOS DA PÁGINA

const movieGrid = document.getElementById("movieGrid");
const favoritesGrid = document.getElementById("favoritesGrid");
const favoritesEmpty = document.getElementById("favoritesEmpty");
const favoriteCount = document.getElementById("favoriteCount");
const searchInput = document.getElementById("searchInput");
const emptyMessage = document.getElementById("emptyMessage");

const recommendButton = document.getElementById("recommendButton");
const anotherRecommendation = document.getElementById("anotherRecommendation");
const recommendationResult = document.getElementById("recommendationResult");
const recommendationContent = document.getElementById("recommendationContent");

const movieModal = document.getElementById("movieModal");
const modalBody = document.getElementById("modalBody");

let selectedGenre = "Todos";
let currentFilter = "Todos";
let lastRecommendationId = null;

// FAVORITOS

function getFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem("cinematch_favorites"));
    return Array.isArray(saved) ? saved.filter(id =>
      movies.some(movie => movie.id === id)
    ) : [];
  } catch {
    return [];
  }
}

let favorites = getFavorites();

function saveFavorites() {
  localStorage.setItem("cinematch_favorites", JSON.stringify(favorites));
  updateFavoriteCount();
}

function updateFavoriteCount() {
  favoriteCount.textContent = favorites.length;
}

// CRIAR CARD DO FILME

function createMovieCard(movie) {
  const isFavorite = favorites.includes(movie.id);

  return `
    <article class="movie-card" data-movie="${movie.id}">
      <button
        class="favorite-button ${isFavorite ? "is-favorite" : ""}"
        data-action="favorite"
        data-id="${movie.id}"
        aria-label="${isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}"
        title="${isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}"
      >${isFavorite ? "♥" : "♡"}</button>

      <img
        class="movie-poster"
        src="${movie.image}"
        alt="Cartaz de ${movie.title}"
        loading="lazy"
        onerror="this.src='https://placehold.co/500x750/191f30/ffffff?text=Filme'"
      >

      <div class="movie-card-info">
        <h3>${movie.title}</h3>
        <p>${movie.genre} · ${movie.year}</p>
        <p class="movie-rating">★ ${movie.rating.toFixed(1)} / 10</p>
      </div>
    </article>
  `;
}

// MOSTRAR FILMES

function renderMovies() {
  const search = searchInput.value.toLowerCase().trim();

  const filteredMovies = movies.filter(movie => {
    const matchesGenre =
      currentFilter === "Todos" || movie.genre === currentFilter;

    const matchesSearch =
      movie.title.toLowerCase().includes(search);

    return matchesGenre && matchesSearch;
  });

  movieGrid.innerHTML = filteredMovies.map(createMovieCard).join("");

  emptyMessage.classList.toggle("hidden", filteredMovies.length !== 0);
}

// MOSTRAR FAVORITOS

function renderFavorites() {
  const favoriteMovies = movies.filter(movie =>
    favorites.includes(movie.id)
  );

  favoritesGrid.innerHTML = favoriteMovies.map(createMovieCard).join("");

  favoritesEmpty.classList.toggle("hidden", favoriteMovies.length !== 0);
}

// ADICIONAR OU REMOVER FAVORITOS

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(movieId => movieId !== id);
  } else {
    favorites.push(id);
  }

  saveFavorites();
  renderMovies();
  renderFavorites();

  if (!recommendationResult.classList.contains("hidden")) {
    const currentMovie = movies.find(movie =>
      movie.id === lastRecommendationId
    );

    if (currentMovie) {
      showRecommendation(currentMovie);
    }
  }
}

// ABRIR DETALHES

function openMovie(id) {
  const movie = movies.find(item => item.id === id);

  if (!movie) return;

  const isFavorite = favorites.includes(movie.id);

  modalBody.innerHTML = `
    <div class="modal-movie">
      <img src="${movie.image}" alt="Cartaz de ${movie.title}"
        onerror="this.src='https://placehold.co/500x750/191f30/ffffff?text=Filme'">

      <div>
        <span class="eyebrow">${movie.genre.toUpperCase()}</span>
        <h2 id="modalTitle">${movie.title}</h2>
        <p class="movie-meta">★ ${movie.rating.toFixed(1)} · ${movie.year} · ${movie.duration}</p>
        <p>${movie.description}</p>

        <button
          class="primary-button"
          data-action="favorite"
          data-id="${movie.id}"
        >${isFavorite ? "♥ Remover dos favoritos" : "♡ Adicionar aos favoritos"}</button>
      </div>
    </div>
  `;

  movieModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeMovie() {
  movieModal.classList.add("hidden");
  document.body.style.overflow = "";
}

// FUNÇÃO DE RECOMENDAÇÃO

function recommendMovie() {
  const availableMovies = movies.filter(movie =>
    selectedGenre === "Todos" || movie.genre === selectedGenre
  );

  if (availableMovies.length === 0) return;

  let options = availableMovies.filter(movie =>
    movie.id !== lastRecommendationId
  );

  if (options.length === 0) {
    options = availableMovies;
  }

  const randomIndex = Math.floor(Math.random() * options.length);
  const selectedMovie = options[randomIndex];

  lastRecommendationId = selectedMovie.id;

  showRecommendation(selectedMovie);
}

function showRecommendation(movie) {
  const isFavorite = favorites.includes(movie.id);

  recommendationContent.innerHTML = `
    <div class="result-movie">
      <img
        src="${movie.image}"
        alt="Cartaz de ${movie.title}"
        onerror="this.src='https://placehold.co/500x750/191f30/ffffff?text=Filme'"
      >

      <div>
        <h3>${movie.title}</h3>
        <p class="movie-meta">
          ★ ${movie.rating.toFixed(1)} · ${movie.year} · ${movie.genre}
        </p>
        <p>${movie.description}</p>

        <button
          class="secondary-button"
          data-action="details"
          data-id="${movie.id}"
        >Ver detalhes</button>

        <button
          class="secondary-button"
          data-action="favorite"
          data-id="${movie.id}"
        >${isFavorite ? "♥ Salvo nos favoritos" : "♡ Salvar nos favoritos"}</button>
      </div>
    </div>
  `;

  recommendationResult.classList.remove("hidden");
}

// FILTROS DE GÊNERO

document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach(item =>
      item.classList.remove("selected")
    );

    button.classList.add("selected");

    currentFilter = button.dataset.filter;

    document.querySelectorAll(".genre-card").forEach(item => {
      item.classList.toggle(
        "active",
        item.dataset.genre === currentFilter
      );
    });

    renderMovies();
  });
});

document.querySelectorAll(".genre-card").forEach(button => {
  button.addEventListener("click", () => {
    selectedGenre = button.dataset.genre;

    document.querySelectorAll(".genre-card").forEach(item =>
      item.classList.remove("active")
    );

    button.classList.add("active");

    document.querySelectorAll(".filter-button").forEach(item => {
      item.classList.toggle(
        "selected",
        item.dataset.filter === selectedGenre
      );
    });

    currentFilter = selectedGenre;
    renderMovies();
  });
});

// PESQUISA

searchInput.addEventListener("input", renderMovies);

// EVENTOS DOS CARDS

document.addEventListener("click", event => {
  const actionButton = event.target.closest("[data-action]");

  if (actionButton) {
    const id = Number(actionButton.dataset.id);
    const action = actionButton.dataset.action;

    if (action === "favorite") {
      toggleFavorite(id);

      if (!movieModal.classList.contains("hidden")) {
        openMovie(id);
      }
    }

    if (action === "details") {
      openMovie(id);
    }

    return;
  }

  const movieCard = event.target.closest(".movie-card");

  if (movieCard) {
    openMovie(Number(movieCard.dataset.movie));
  }
});

// BOTÕES DE RECOMENDAÇÃO

recommendButton.addEventListener("click", recommendMovie);
anotherRecommendation.addEventListener("click", recommendMovie);

// MODAL

document.getElementById("closeModal").addEventListener("click", closeMovie);

movieModal.addEventListener("click", event => {
  if (event.target === movieModal) {
    closeMovie();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeMovie();
  }
});

// MENU PARA CELULAR

document.getElementById("mobileMenu").addEventListener("click", () => {
  document.querySelector(".navigation").classList.toggle("open");
});

document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".navigation").classList.remove("open");
  });
});

// INICIALIZAÇÃO

function initializeApp() {
  updateFavoriteCount();
  renderMovies();
  renderFavorites();
}

initializeApp();
