import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace dtos. */
export namespace dtos {

    /** MessageType enum. */
    enum MessageType {

        /** UNKNOWN value */
        UNKNOWN = 0,

        /** GET_GAME_HISTORY value */
        GET_GAME_HISTORY = 1,

        /** GET_GAME_LOBBIES value */
        GET_GAME_LOBBIES = 2,

        /** CREATE_LOBBY value */
        CREATE_LOBBY = 3,

        /** JOIN_LOBBY value */
        JOIN_LOBBY = 4,

        /** START_GAME value */
        START_GAME = 5,

        /** NEW_LOBBY_AVAILABLE value */
        NEW_LOBBY_AVAILABLE = 6,

        /** PLAYER_JOINED_LOBBY value */
        PLAYER_JOINED_LOBBY = 7
    }

    /**
     * Properties of a CreateLobbyPayload.
     * @deprecated Use dtos.CreateLobbyPayload.$Properties instead.
     */
    interface ICreateLobbyPayload extends dtos.CreateLobbyPayload.$Properties {
    }

    /** Represents a CreateLobbyPayload. */
    class CreateLobbyPayload {

        /**
         * Constructs a new CreateLobbyPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: dtos.CreateLobbyPayload.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CreateLobbyPayload maxPlayers. */
        maxPlayers: number;

        /**
         * Creates a new CreateLobbyPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateLobbyPayload instance
         */
        static create(properties: dtos.CreateLobbyPayload.$Shape): dtos.CreateLobbyPayload & dtos.CreateLobbyPayload.$Shape;
        static create(properties?: dtos.CreateLobbyPayload.$Properties): dtos.CreateLobbyPayload;

        /**
         * Encodes the specified CreateLobbyPayload message. Does not implicitly {@link dtos.CreateLobbyPayload.verify|verify} messages.
         * @param message CreateLobbyPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: dtos.CreateLobbyPayload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateLobbyPayload message, length delimited. Does not implicitly {@link dtos.CreateLobbyPayload.verify|verify} messages.
         * @param message CreateLobbyPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: dtos.CreateLobbyPayload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateLobbyPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {dtos.CreateLobbyPayload & dtos.CreateLobbyPayload.$Shape} CreateLobbyPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dtos.CreateLobbyPayload & dtos.CreateLobbyPayload.$Shape;

        /**
         * Decodes a CreateLobbyPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {dtos.CreateLobbyPayload & dtos.CreateLobbyPayload.$Shape} CreateLobbyPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dtos.CreateLobbyPayload & dtos.CreateLobbyPayload.$Shape;

        /**
         * Verifies a CreateLobbyPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateLobbyPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateLobbyPayload
         */
        static fromObject(object: { [k: string]: any }): dtos.CreateLobbyPayload;

        /**
         * Creates a plain object from a CreateLobbyPayload message. Also converts values to other types if specified.
         * @param message CreateLobbyPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: dtos.CreateLobbyPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateLobbyPayload to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CreateLobbyPayload
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CreateLobbyPayload {

        /** Properties of a CreateLobbyPayload. */
        interface $Properties {

            /** CreateLobbyPayload maxPlayers */
            maxPlayers?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CreateLobbyPayload. */
        type $Shape = dtos.CreateLobbyPayload.$Properties;
    }

    /**
     * Properties of a JoinLobbyPayload.
     * @deprecated Use dtos.JoinLobbyPayload.$Properties instead.
     */
    interface IJoinLobbyPayload extends dtos.JoinLobbyPayload.$Properties {
    }

    /** Represents a JoinLobbyPayload. */
    class JoinLobbyPayload {

        /**
         * Constructs a new JoinLobbyPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: dtos.JoinLobbyPayload.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** JoinLobbyPayload lobbyId. */
        lobbyId: string;

        /**
         * Creates a new JoinLobbyPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinLobbyPayload instance
         */
        static create(properties: dtos.JoinLobbyPayload.$Shape): dtos.JoinLobbyPayload & dtos.JoinLobbyPayload.$Shape;
        static create(properties?: dtos.JoinLobbyPayload.$Properties): dtos.JoinLobbyPayload;

        /**
         * Encodes the specified JoinLobbyPayload message. Does not implicitly {@link dtos.JoinLobbyPayload.verify|verify} messages.
         * @param message JoinLobbyPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: dtos.JoinLobbyPayload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinLobbyPayload message, length delimited. Does not implicitly {@link dtos.JoinLobbyPayload.verify|verify} messages.
         * @param message JoinLobbyPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: dtos.JoinLobbyPayload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinLobbyPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {dtos.JoinLobbyPayload & dtos.JoinLobbyPayload.$Shape} JoinLobbyPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dtos.JoinLobbyPayload & dtos.JoinLobbyPayload.$Shape;

        /**
         * Decodes a JoinLobbyPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {dtos.JoinLobbyPayload & dtos.JoinLobbyPayload.$Shape} JoinLobbyPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dtos.JoinLobbyPayload & dtos.JoinLobbyPayload.$Shape;

        /**
         * Verifies a JoinLobbyPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinLobbyPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinLobbyPayload
         */
        static fromObject(object: { [k: string]: any }): dtos.JoinLobbyPayload;

        /**
         * Creates a plain object from a JoinLobbyPayload message. Also converts values to other types if specified.
         * @param message JoinLobbyPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: dtos.JoinLobbyPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinLobbyPayload to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for JoinLobbyPayload
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace JoinLobbyPayload {

        /** Properties of a JoinLobbyPayload. */
        interface $Properties {

            /** JoinLobbyPayload lobbyId */
            lobbyId?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a JoinLobbyPayload. */
        type $Shape = dtos.JoinLobbyPayload.$Properties;
    }

    /**
     * Properties of a StartGamePayload.
     * @deprecated Use dtos.StartGamePayload.$Properties instead.
     */
    interface IStartGamePayload extends dtos.StartGamePayload.$Properties {
    }

    /** Represents a StartGamePayload. */
    class StartGamePayload {

        /**
         * Constructs a new StartGamePayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: dtos.StartGamePayload.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** StartGamePayload lobbyId. */
        lobbyId: string;

        /**
         * Creates a new StartGamePayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartGamePayload instance
         */
        static create(properties: dtos.StartGamePayload.$Shape): dtos.StartGamePayload & dtos.StartGamePayload.$Shape;
        static create(properties?: dtos.StartGamePayload.$Properties): dtos.StartGamePayload;

        /**
         * Encodes the specified StartGamePayload message. Does not implicitly {@link dtos.StartGamePayload.verify|verify} messages.
         * @param message StartGamePayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: dtos.StartGamePayload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartGamePayload message, length delimited. Does not implicitly {@link dtos.StartGamePayload.verify|verify} messages.
         * @param message StartGamePayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: dtos.StartGamePayload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartGamePayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {dtos.StartGamePayload & dtos.StartGamePayload.$Shape} StartGamePayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dtos.StartGamePayload & dtos.StartGamePayload.$Shape;

        /**
         * Decodes a StartGamePayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {dtos.StartGamePayload & dtos.StartGamePayload.$Shape} StartGamePayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dtos.StartGamePayload & dtos.StartGamePayload.$Shape;

        /**
         * Verifies a StartGamePayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartGamePayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartGamePayload
         */
        static fromObject(object: { [k: string]: any }): dtos.StartGamePayload;

        /**
         * Creates a plain object from a StartGamePayload message. Also converts values to other types if specified.
         * @param message StartGamePayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: dtos.StartGamePayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartGamePayload to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for StartGamePayload
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace StartGamePayload {

        /** Properties of a StartGamePayload. */
        interface $Properties {

            /** StartGamePayload lobbyId */
            lobbyId?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a StartGamePayload. */
        type $Shape = dtos.StartGamePayload.$Properties;
    }

    /**
     * Properties of a GetGameHistoryPayload.
     * @deprecated Use dtos.GetGameHistoryPayload.$Properties instead.
     */
    interface IGetGameHistoryPayload extends dtos.GetGameHistoryPayload.$Properties {
    }

    /** Represents a GetGameHistoryPayload. */
    class GetGameHistoryPayload {

        /**
         * Constructs a new GetGameHistoryPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: dtos.GetGameHistoryPayload.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetGameHistoryPayload playerId. */
        playerId: (number|Long);

        /**
         * Creates a new GetGameHistoryPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGameHistoryPayload instance
         */
        static create(properties: dtos.GetGameHistoryPayload.$Shape): dtos.GetGameHistoryPayload & dtos.GetGameHistoryPayload.$Shape;
        static create(properties?: dtos.GetGameHistoryPayload.$Properties): dtos.GetGameHistoryPayload;

        /**
         * Encodes the specified GetGameHistoryPayload message. Does not implicitly {@link dtos.GetGameHistoryPayload.verify|verify} messages.
         * @param message GetGameHistoryPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: dtos.GetGameHistoryPayload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGameHistoryPayload message, length delimited. Does not implicitly {@link dtos.GetGameHistoryPayload.verify|verify} messages.
         * @param message GetGameHistoryPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: dtos.GetGameHistoryPayload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGameHistoryPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {dtos.GetGameHistoryPayload & dtos.GetGameHistoryPayload.$Shape} GetGameHistoryPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dtos.GetGameHistoryPayload & dtos.GetGameHistoryPayload.$Shape;

        /**
         * Decodes a GetGameHistoryPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {dtos.GetGameHistoryPayload & dtos.GetGameHistoryPayload.$Shape} GetGameHistoryPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dtos.GetGameHistoryPayload & dtos.GetGameHistoryPayload.$Shape;

        /**
         * Verifies a GetGameHistoryPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGameHistoryPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGameHistoryPayload
         */
        static fromObject(object: { [k: string]: any }): dtos.GetGameHistoryPayload;

        /**
         * Creates a plain object from a GetGameHistoryPayload message. Also converts values to other types if specified.
         * @param message GetGameHistoryPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: dtos.GetGameHistoryPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGameHistoryPayload to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GetGameHistoryPayload
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetGameHistoryPayload {

        /** Properties of a GetGameHistoryPayload. */
        interface $Properties {

            /** GetGameHistoryPayload playerId */
            playerId?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetGameHistoryPayload. */
        type $Shape = dtos.GetGameHistoryPayload.$Properties;
    }

    /**
     * Properties of a NewLobbyAvailableEvent.
     * @deprecated Use dtos.NewLobbyAvailableEvent.$Properties instead.
     */
    interface INewLobbyAvailableEvent extends dtos.NewLobbyAvailableEvent.$Properties {
    }

    /** Represents a NewLobbyAvailableEvent. */
    class NewLobbyAvailableEvent {

        /**
         * Constructs a new NewLobbyAvailableEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: dtos.NewLobbyAvailableEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** NewLobbyAvailableEvent lobbyId. */
        lobbyId: string;

        /** NewLobbyAvailableEvent maxPlayers. */
        maxPlayers: number;

        /** NewLobbyAvailableEvent hostId. */
        hostId: (number|Long);

        /** NewLobbyAvailableEvent hostUsername. */
        hostUsername: string;

        /**
         * Creates a new NewLobbyAvailableEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NewLobbyAvailableEvent instance
         */
        static create(properties: dtos.NewLobbyAvailableEvent.$Shape): dtos.NewLobbyAvailableEvent & dtos.NewLobbyAvailableEvent.$Shape;
        static create(properties?: dtos.NewLobbyAvailableEvent.$Properties): dtos.NewLobbyAvailableEvent;

        /**
         * Encodes the specified NewLobbyAvailableEvent message. Does not implicitly {@link dtos.NewLobbyAvailableEvent.verify|verify} messages.
         * @param message NewLobbyAvailableEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: dtos.NewLobbyAvailableEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NewLobbyAvailableEvent message, length delimited. Does not implicitly {@link dtos.NewLobbyAvailableEvent.verify|verify} messages.
         * @param message NewLobbyAvailableEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: dtos.NewLobbyAvailableEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NewLobbyAvailableEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {dtos.NewLobbyAvailableEvent & dtos.NewLobbyAvailableEvent.$Shape} NewLobbyAvailableEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dtos.NewLobbyAvailableEvent & dtos.NewLobbyAvailableEvent.$Shape;

        /**
         * Decodes a NewLobbyAvailableEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {dtos.NewLobbyAvailableEvent & dtos.NewLobbyAvailableEvent.$Shape} NewLobbyAvailableEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dtos.NewLobbyAvailableEvent & dtos.NewLobbyAvailableEvent.$Shape;

        /**
         * Verifies a NewLobbyAvailableEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NewLobbyAvailableEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NewLobbyAvailableEvent
         */
        static fromObject(object: { [k: string]: any }): dtos.NewLobbyAvailableEvent;

        /**
         * Creates a plain object from a NewLobbyAvailableEvent message. Also converts values to other types if specified.
         * @param message NewLobbyAvailableEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: dtos.NewLobbyAvailableEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NewLobbyAvailableEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for NewLobbyAvailableEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace NewLobbyAvailableEvent {

        /** Properties of a NewLobbyAvailableEvent. */
        interface $Properties {

            /** NewLobbyAvailableEvent lobbyId */
            lobbyId?: (string|null);

            /** NewLobbyAvailableEvent maxPlayers */
            maxPlayers?: (number|null);

            /** NewLobbyAvailableEvent hostId */
            hostId?: (number|Long|null);

            /** NewLobbyAvailableEvent hostUsername */
            hostUsername?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a NewLobbyAvailableEvent. */
        type $Shape = dtos.NewLobbyAvailableEvent.$Properties;
    }

    /**
     * Properties of a PlayerJoinedLobbyEvent.
     * @deprecated Use dtos.PlayerJoinedLobbyEvent.$Properties instead.
     */
    interface IPlayerJoinedLobbyEvent extends dtos.PlayerJoinedLobbyEvent.$Properties {
    }

    /** Represents a PlayerJoinedLobbyEvent. */
    class PlayerJoinedLobbyEvent {

        /**
         * Constructs a new PlayerJoinedLobbyEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: dtos.PlayerJoinedLobbyEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PlayerJoinedLobbyEvent lobbyId. */
        lobbyId: string;

        /** PlayerJoinedLobbyEvent playerId. */
        playerId: (number|Long);

        /** PlayerJoinedLobbyEvent playerUsername. */
        playerUsername: string;

        /**
         * Creates a new PlayerJoinedLobbyEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerJoinedLobbyEvent instance
         */
        static create(properties: dtos.PlayerJoinedLobbyEvent.$Shape): dtos.PlayerJoinedLobbyEvent & dtos.PlayerJoinedLobbyEvent.$Shape;
        static create(properties?: dtos.PlayerJoinedLobbyEvent.$Properties): dtos.PlayerJoinedLobbyEvent;

        /**
         * Encodes the specified PlayerJoinedLobbyEvent message. Does not implicitly {@link dtos.PlayerJoinedLobbyEvent.verify|verify} messages.
         * @param message PlayerJoinedLobbyEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: dtos.PlayerJoinedLobbyEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerJoinedLobbyEvent message, length delimited. Does not implicitly {@link dtos.PlayerJoinedLobbyEvent.verify|verify} messages.
         * @param message PlayerJoinedLobbyEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: dtos.PlayerJoinedLobbyEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerJoinedLobbyEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {dtos.PlayerJoinedLobbyEvent & dtos.PlayerJoinedLobbyEvent.$Shape} PlayerJoinedLobbyEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dtos.PlayerJoinedLobbyEvent & dtos.PlayerJoinedLobbyEvent.$Shape;

        /**
         * Decodes a PlayerJoinedLobbyEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {dtos.PlayerJoinedLobbyEvent & dtos.PlayerJoinedLobbyEvent.$Shape} PlayerJoinedLobbyEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dtos.PlayerJoinedLobbyEvent & dtos.PlayerJoinedLobbyEvent.$Shape;

        /**
         * Verifies a PlayerJoinedLobbyEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerJoinedLobbyEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerJoinedLobbyEvent
         */
        static fromObject(object: { [k: string]: any }): dtos.PlayerJoinedLobbyEvent;

        /**
         * Creates a plain object from a PlayerJoinedLobbyEvent message. Also converts values to other types if specified.
         * @param message PlayerJoinedLobbyEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: dtos.PlayerJoinedLobbyEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerJoinedLobbyEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PlayerJoinedLobbyEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlayerJoinedLobbyEvent {

        /** Properties of a PlayerJoinedLobbyEvent. */
        interface $Properties {

            /** PlayerJoinedLobbyEvent lobbyId */
            lobbyId?: (string|null);

            /** PlayerJoinedLobbyEvent playerId */
            playerId?: (number|Long|null);

            /** PlayerJoinedLobbyEvent playerUsername */
            playerUsername?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PlayerJoinedLobbyEvent. */
        type $Shape = dtos.PlayerJoinedLobbyEvent.$Properties;
    }

    /**
     * Properties of a Message.
     * @deprecated Use dtos.Message.$Properties instead.
     */
    interface IMessage extends dtos.Message.$Properties {
    }

    /** Represents a Message. */
    class Message {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: dtos.Message.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Message type. */
        type: dtos.MessageType;

        /** Message createLobby. */
        createLobby?: (dtos.CreateLobbyPayload.$Properties|null);

        /** Message joinLobby. */
        joinLobby?: (dtos.JoinLobbyPayload.$Properties|null);

        /** Message startGame. */
        startGame?: (dtos.StartGamePayload.$Properties|null);

        /** Message getHistory. */
        getHistory?: (dtos.GetGameHistoryPayload.$Properties|null);

        /** Message newLobbyAvailable. */
        newLobbyAvailable?: (dtos.NewLobbyAvailableEvent.$Properties|null);

        /** Message playerJoined. */
        playerJoined?: (dtos.PlayerJoinedLobbyEvent.$Properties|null);

        /** Message payload. */
        payload?: ("createLobby"|"joinLobby"|"startGame"|"getHistory"|"newLobbyAvailable"|"playerJoined");

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        static create(properties: dtos.Message.$Shape): dtos.Message & dtos.Message.$Shape;
        static create(properties?: dtos.Message.$Properties): dtos.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link dtos.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: dtos.Message.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link dtos.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: dtos.Message.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {dtos.Message & dtos.Message.$Shape} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dtos.Message & dtos.Message.$Shape;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {dtos.Message & dtos.Message.$Shape} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dtos.Message & dtos.Message.$Shape;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        static fromObject(object: { [k: string]: any }): dtos.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: dtos.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Message
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Message {

        /** Properties of a Message. */
        interface $Properties {

            /** Message type */
            type?: (dtos.MessageType|null);

            /** Message createLobby */
            createLobby?: (dtos.CreateLobbyPayload.$Properties|null);

            /** Message joinLobby */
            joinLobby?: (dtos.JoinLobbyPayload.$Properties|null);

            /** Message startGame */
            startGame?: (dtos.StartGamePayload.$Properties|null);

            /** Message getHistory */
            getHistory?: (dtos.GetGameHistoryPayload.$Properties|null);

            /** Message newLobbyAvailable */
            newLobbyAvailable?: (dtos.NewLobbyAvailableEvent.$Properties|null);

            /** Message playerJoined */
            playerJoined?: (dtos.PlayerJoinedLobbyEvent.$Properties|null);

            /** Message payload */
            payload?: ("createLobby"|"joinLobby"|"startGame"|"getHistory"|"newLobbyAvailable"|"playerJoined");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a Message. */
        type $Shape = {
          type?: dtos.MessageType|null;
          createLobby?: dtos.CreateLobbyPayload.$Shape|null;
          joinLobby?: dtos.JoinLobbyPayload.$Shape|null;
          startGame?: dtos.StartGamePayload.$Shape|null;
          getHistory?: dtos.GetGameHistoryPayload.$Shape|null;
          newLobbyAvailable?: dtos.NewLobbyAvailableEvent.$Shape|null;
          playerJoined?: dtos.PlayerJoinedLobbyEvent.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ payload?: undefined; createLobby?: null; joinLobby?: null; startGame?: null; getHistory?: null; newLobbyAvailable?: null; playerJoined?: null }|{ payload?: "createLobby"; createLobby: dtos.CreateLobbyPayload.$Shape; joinLobby?: null; startGame?: null; getHistory?: null; newLobbyAvailable?: null; playerJoined?: null }|{ payload?: "joinLobby"; createLobby?: null; joinLobby: dtos.JoinLobbyPayload.$Shape; startGame?: null; getHistory?: null; newLobbyAvailable?: null; playerJoined?: null }|{ payload?: "startGame"; createLobby?: null; joinLobby?: null; startGame: dtos.StartGamePayload.$Shape; getHistory?: null; newLobbyAvailable?: null; playerJoined?: null }|{ payload?: "getHistory"; createLobby?: null; joinLobby?: null; startGame?: null; getHistory: dtos.GetGameHistoryPayload.$Shape; newLobbyAvailable?: null; playerJoined?: null }|{ payload?: "newLobbyAvailable"; createLobby?: null; joinLobby?: null; startGame?: null; getHistory?: null; newLobbyAvailable: dtos.NewLobbyAvailableEvent.$Shape; playerJoined?: null }|{ payload?: "playerJoined"; createLobby?: null; joinLobby?: null; startGame?: null; getHistory?: null; newLobbyAvailable?: null; playerJoined: dtos.PlayerJoinedLobbyEvent.$Shape })
        );
    }
}
