Trabalho de front end

Jogo da velha

O app foi pensado para que o usuário tenha uma experiencia intuitiva e de facil acesso.

Todo o app foi desenhado na plataforma Figma antes da inicialização do projeto, a aplicação em si terá somente uma página onde seu conteúdo será dinamicamente controlado por uma classe, abaixo você encontrará as imagens de todas as interfaces:

Para a melhor organização do software, utilizamos o paradigma orientado a objeto, cada classe criada está disposta em arquivos separados para a melhor visualização e manutenção do código fonte.
Nesse projeto utilizamos 3 classes: Player, Game e UI

Player: classe responsável por armazenar o nome do jogador, qual o simbolo que o jogador utilizará na rodada atual e a quantidade de partidas ganhas no jogo atual. 

Game: classe responsável por armazenar a informação do jogo atual (tabela) e placar atual dos players, iniciar o game, verificar se houve ganhador e quem ganhou, verificar celulas disponiveis e reiniciar o game.

UI: classe responsável por montar todo o UI, desde o game em si, até a tabela de ranking.

Todas as partidas ganhas pelo player serão armazenadas em memoria para caso posteriormente ele venha jogar novamente o saldo não se perca, no final de cada partida as vitórias serão somadas em um rank geral onde será possivel ver a posição de determinado player e quem está no topo da tabela.

Para organizar as classes, foi utilizado o draw.io para desenhalas, abaixou você encotrará as imagens de todas as classes: 