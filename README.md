### :memo: Sobre a aplicação

Esta é uma API REST construída para um sistema de capturas Pokémon. É escrita em NodeJS utilizando MVC, com banco de dados MongoDB e MongoDB Atlas. A seguir estão as ferramentas utilizadas, funcionalidades, etc.

### :bookmark_tabs: **Funcionalidades de administrador**

- **Autenticação:** se autenticar no sistema para exercer restritas a usuarios autenticados. (Não implementado ao front-end)
- **Gestão de capturas:** cadastrar, atualizar e listar destinatários cadastrados.
- **Gestão de pokemons:** recebendo dados sobre os pokemons e suas habilidades do website pokeapi.co
- **Gestão de usuários:** cadastrar e listar todos os usuários cadastrados. (Não implementado ao front-end)

### :bookmark_tabs: **Funcionalidades do entregador**

- **Visualizar encomendas:** informando o seu ID de cadastro, o entregador consegue visualizar todas suas encomendas.
- **Alterar status de encomendas:** o entregador pode definir uma data de retirada e de entrega para a encomenda, durante o periodo de 8:00 às 18:00 horas.
- **Cadastrar problemas nas entregas:** o entregador pode cadastrar problemas que ocorreram durante a entrega. Assim os problemas ficam registrados e o administrador pode decidir se a entrega deve ser cancelada ou não.

### :bookmark_tabs: **Rotas**
A api pode ser acessada em https://pokedex-jacto-admission.herokuapp.com/api </br>
No qual:</br>
'/captures' lista todas as capturas, através do GET e sendo inseridas por POST.
'/users/' lista todos os usuários, através do GET e sendo inseridos por POST.
'/sessions' cria uma sessão para autenticação do usuário por POST.
'/pokemons' lista todos os pokemons que serão utilizados para consumo da api e futura listagem ao front-end, por GET.
'/pokemons/:pokemon' para listagem de habilidades do respectivo pokémon, por GET

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


