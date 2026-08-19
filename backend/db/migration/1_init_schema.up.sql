CREATE TABLE players(
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE games(
    id UUID PRIMARY KEY
);

CREATE TABLE scores(
    game_id UUID REFERENCES games(id),
    player_id BIGINT REFERENCES players(id),
    points INT NOT NULL,
    
    CONSTRAINT pk_scores PRIMARY KEY (game_id, player_id)
);