### :memo: Sobre a aplicação

Esta é uma API REST construída para um sistema de capturas Pokémon. É escrita em NodeJS utilizando MVC, com banco de dados MongoDB e MongoDB Atlas. A seguir estão as ferramentas utilizadas, funcionalidades, etc.

### :bookmark_tabs: **Funcionalidades**

- **Autenticação:** se autenticar no sistema para exercer restritas a usuarios autenticados. (Não implementado ao front-end)
- **Gestão de capturas:** cadastrar, atualizar e listar destinatários cadastrados.
- **Gestão de pokemons:** recebendo dados sobre os pokemons e suas habilidades do website pokeapi.co
- **Gestão de usuários:** cadastrar e listar todos os usuários cadastrados. (Não implementado ao front-end)

### :bookmark_tabs: **Rotas**
A api pode ser acessada em https://pokedex-jacto-admission.herokuapp.com/api </br>
No qual:</br>
'/captures' lista todas as capturas, através do GET e sendo inseridas por POST. </br>
'/users/' lista todos os usuários, através do GET e sendo inseridos por POST.</br>
'/sessions' cria uma sessão para autenticação do usuário por POST.</br>
'/pokemons' lista todos os pokemons que serão utilizados para consumo da api e futura listagem ao front-end, por GET.</br>
'/pokemons/:pokemon' para listagem de habilidades do respectivo pokémon, por GET</br>

### :hammer: **Ferramentas utilizadas**
- <a target="_blank" href="https://www.npmjs.com/package/express" alt="Express">Express</a>
- <a target="_blank" href="https://www.npmjs.com/package/sucrase" alt="Sucrase">Sucrase</a>
- <a target="_blank" href="https://www.npmjs.com/package/nodemon" alt="Nodemon">Nodemon</a>
- <a target="_blank" href="https://www.npmjs.com/package/eslint" alt="ESLint">ESLint</a>
- <a target="_blank" href="https://www.npmjs.com/package/bcryptjs" alt="bcryptjs">BCryptjs</a>
- <a target="_blank" href="https://www.npmjs.com/package/dotenv" alt="dotenv">Dotenv</a>
- <a target="_blank" href="https://www.npmjs.com/package/jsonwebtoken" alt="jsonwebtoken">Jsonwebtoken (JWT)</a>
- <a target="_blank" href="https://www.npmjs.com/package/Yup" alt="Yup">Yup</a>
- <a target="_blank" href="https://www.npmjs.com/package/cors" alt="Cors">Cors</a>
- <a target="_blank" href="https://www.npmjs.com/package/mongoose" alt="Mongoose">Mongoose</a>
- <a target="_blank" href="https://www.npmjs.com/package/multers3" alt="Multers3">Multers3</a>
- <a target="_blank" href="https://www.npmjs.com/package/requiredir" alt="require-dir">Require-Dir</a>
- <a target="_blank" href="https://www.npmjs.com/package/shufflearray" alt="Shuffle-Array">Shuffle-Array</a>


