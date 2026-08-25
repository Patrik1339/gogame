/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $Number = $util.global.Number, $String = $util.global.String, $parseInt = $util.global.parseInt, $BigInt = $util.global.BigInt;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const dtos = $root.dtos = (() => {

    /**
     * Namespace dtos.
     * @exports dtos
     * @namespace
     */
    const dtos = {};

    /**
     * MessageType enum.
     * @name dtos.MessageType
     * @enum {number}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} GET_GAME_HISTORY=1 GET_GAME_HISTORY value
     * @property {number} GET_GAME_LOBBIES=2 GET_GAME_LOBBIES value
     * @property {number} CREATE_LOBBY=3 CREATE_LOBBY value
     * @property {number} JOIN_LOBBY=4 JOIN_LOBBY value
     * @property {number} START_GAME=5 START_GAME value
     * @property {number} NEW_LOBBY_AVAILABLE=6 NEW_LOBBY_AVAILABLE value
     * @property {number} PLAYER_JOINED_LOBBY=7 PLAYER_JOINED_LOBBY value
     */
    dtos.MessageType = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[1] = "GET_GAME_HISTORY"] = 1;
        values[valuesById[2] = "GET_GAME_LOBBIES"] = 2;
        values[valuesById[3] = "CREATE_LOBBY"] = 3;
        values[valuesById[4] = "JOIN_LOBBY"] = 4;
        values[valuesById[5] = "START_GAME"] = 5;
        values[valuesById[6] = "NEW_LOBBY_AVAILABLE"] = 6;
        values[valuesById[7] = "PLAYER_JOINED_LOBBY"] = 7;
        return values;
    })();

    dtos.CreateLobbyPayload = (function() {

        /**
         * Properties of a CreateLobbyPayload.
         * @typedef {Object} dtos.CreateLobbyPayload.$Properties
         * @property {number|null} [maxPlayers] CreateLobbyPayload maxPlayers
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a CreateLobbyPayload.
         * @memberof dtos
         * @interface ICreateLobbyPayload
         * @augments dtos.CreateLobbyPayload.$Properties
         * @deprecated Use dtos.CreateLobbyPayload.$Properties instead.
         */

        /**
         * Shape of a CreateLobbyPayload.
         * @typedef {dtos.CreateLobbyPayload.$Properties} dtos.CreateLobbyPayload.$Shape
         */

        /**
         * Constructs a new CreateLobbyPayload.
         * @memberof dtos
         * @classdesc Represents a CreateLobbyPayload.
         * @constructor
         * @param {dtos.CreateLobbyPayload.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const CreateLobbyPayload = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * CreateLobbyPayload maxPlayers.
         * @member {number} maxPlayers
         * @memberof dtos.CreateLobbyPayload
         * @instance
         */
        CreateLobbyPayload.prototype.maxPlayers = 0;

        /**
         * Creates a new CreateLobbyPayload instance using the specified properties.
         * @function create
         * @memberof dtos.CreateLobbyPayload
         * @static
         * @param {dtos.CreateLobbyPayload.$Properties=} [properties] Properties to set
         * @returns {dtos.CreateLobbyPayload} CreateLobbyPayload instance
         * @type {{
         *   (properties: dtos.CreateLobbyPayload.$Shape): dtos.CreateLobbyPayload & dtos.CreateLobbyPayload.$Shape;
         *   (properties?: dtos.CreateLobbyPayload.$Properties): dtos.CreateLobbyPayload;
         * }}
         */
        CreateLobbyPayload.create = function(properties) {
            return new CreateLobbyPayload(properties);
        };

        /**
         * Encodes the specified CreateLobbyPayload message. Does not implicitly {@link dtos.CreateLobbyPayload.verify|verify} messages.
         * @function encode
         * @memberof dtos.CreateLobbyPayload
         * @static
         * @param {dtos.CreateLobbyPayload.$Properties} message CreateLobbyPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateLobbyPayload.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.maxPlayers != null && $Object.hasOwnProperty.call(message, "maxPlayers") && message.maxPlayers !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.maxPlayers);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified CreateLobbyPayload message, length delimited. Does not implicitly {@link dtos.CreateLobbyPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dtos.CreateLobbyPayload
         * @static
         * @param {dtos.CreateLobbyPayload.$Properties} message CreateLobbyPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateLobbyPayload.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a CreateLobbyPayload message from the specified reader or buffer.
         * @function decode
         * @memberof dtos.CreateLobbyPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dtos.CreateLobbyPayload & dtos.CreateLobbyPayload.$Shape} CreateLobbyPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateLobbyPayload.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.dtos.CreateLobbyPayload(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.maxPlayers = value;
                        else
                            delete message.maxPlayers;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a CreateLobbyPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dtos.CreateLobbyPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dtos.CreateLobbyPayload & dtos.CreateLobbyPayload.$Shape} CreateLobbyPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateLobbyPayload.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateLobbyPayload message.
         * @function verify
         * @memberof dtos.CreateLobbyPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateLobbyPayload.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.maxPlayers != null && $Object.hasOwnProperty.call(message, "maxPlayers"))
                if (!$util.isInteger(message.maxPlayers))
                    return "maxPlayers: integer expected";
            return null;
        };

        /**
         * Creates a CreateLobbyPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dtos.CreateLobbyPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dtos.CreateLobbyPayload} CreateLobbyPayload
         */
        CreateLobbyPayload.fromObject = function (object, _depth) {
            if (object instanceof $root.dtos.CreateLobbyPayload)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".dtos.CreateLobbyPayload: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.dtos.CreateLobbyPayload();
            if (object.maxPlayers != null)
                if ($Number(object.maxPlayers) !== 0)
                    message.maxPlayers = object.maxPlayers | 0;
            return message;
        };

        /**
         * Creates a plain object from a CreateLobbyPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dtos.CreateLobbyPayload
         * @static
         * @param {dtos.CreateLobbyPayload} message CreateLobbyPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateLobbyPayload.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                object.maxPlayers = 0;
            if (message.maxPlayers != null && $Object.hasOwnProperty.call(message, "maxPlayers"))
                object.maxPlayers = message.maxPlayers;
            return object;
        };

        /**
         * Converts this CreateLobbyPayload to JSON.
         * @function toJSON
         * @memberof dtos.CreateLobbyPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateLobbyPayload.prototype.toJSON = function() {
            return CreateLobbyPayload.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for CreateLobbyPayload
         * @function getTypeUrl
         * @memberof dtos.CreateLobbyPayload
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        CreateLobbyPayload.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/dtos.CreateLobbyPayload";
        };

        return CreateLobbyPayload;
    })();

    dtos.JoinLobbyPayload = (function() {

        /**
         * Properties of a JoinLobbyPayload.
         * @typedef {Object} dtos.JoinLobbyPayload.$Properties
         * @property {string|null} [lobbyId] JoinLobbyPayload lobbyId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a JoinLobbyPayload.
         * @memberof dtos
         * @interface IJoinLobbyPayload
         * @augments dtos.JoinLobbyPayload.$Properties
         * @deprecated Use dtos.JoinLobbyPayload.$Properties instead.
         */

        /**
         * Shape of a JoinLobbyPayload.
         * @typedef {dtos.JoinLobbyPayload.$Properties} dtos.JoinLobbyPayload.$Shape
         */

        /**
         * Constructs a new JoinLobbyPayload.
         * @memberof dtos
         * @classdesc Represents a JoinLobbyPayload.
         * @constructor
         * @param {dtos.JoinLobbyPayload.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const JoinLobbyPayload = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * JoinLobbyPayload lobbyId.
         * @member {string} lobbyId
         * @memberof dtos.JoinLobbyPayload
         * @instance
         */
        JoinLobbyPayload.prototype.lobbyId = "";

        /**
         * Creates a new JoinLobbyPayload instance using the specified properties.
         * @function create
         * @memberof dtos.JoinLobbyPayload
         * @static
         * @param {dtos.JoinLobbyPayload.$Properties=} [properties] Properties to set
         * @returns {dtos.JoinLobbyPayload} JoinLobbyPayload instance
         * @type {{
         *   (properties: dtos.JoinLobbyPayload.$Shape): dtos.JoinLobbyPayload & dtos.JoinLobbyPayload.$Shape;
         *   (properties?: dtos.JoinLobbyPayload.$Properties): dtos.JoinLobbyPayload;
         * }}
         */
        JoinLobbyPayload.create = function(properties) {
            return new JoinLobbyPayload(properties);
        };

        /**
         * Encodes the specified JoinLobbyPayload message. Does not implicitly {@link dtos.JoinLobbyPayload.verify|verify} messages.
         * @function encode
         * @memberof dtos.JoinLobbyPayload
         * @static
         * @param {dtos.JoinLobbyPayload.$Properties} message JoinLobbyPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinLobbyPayload.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.lobbyId != null && $Object.hasOwnProperty.call(message, "lobbyId") && message.lobbyId !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.lobbyId);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified JoinLobbyPayload message, length delimited. Does not implicitly {@link dtos.JoinLobbyPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dtos.JoinLobbyPayload
         * @static
         * @param {dtos.JoinLobbyPayload.$Properties} message JoinLobbyPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinLobbyPayload.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a JoinLobbyPayload message from the specified reader or buffer.
         * @function decode
         * @memberof dtos.JoinLobbyPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dtos.JoinLobbyPayload & dtos.JoinLobbyPayload.$Shape} JoinLobbyPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinLobbyPayload.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.dtos.JoinLobbyPayload(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.lobbyId = value;
                        else
                            delete message.lobbyId;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a JoinLobbyPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dtos.JoinLobbyPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dtos.JoinLobbyPayload & dtos.JoinLobbyPayload.$Shape} JoinLobbyPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinLobbyPayload.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinLobbyPayload message.
         * @function verify
         * @memberof dtos.JoinLobbyPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinLobbyPayload.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.lobbyId != null && $Object.hasOwnProperty.call(message, "lobbyId"))
                if (!$util.isString(message.lobbyId))
                    return "lobbyId: string expected";
            return null;
        };

        /**
         * Creates a JoinLobbyPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dtos.JoinLobbyPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dtos.JoinLobbyPayload} JoinLobbyPayload
         */
        JoinLobbyPayload.fromObject = function (object, _depth) {
            if (object instanceof $root.dtos.JoinLobbyPayload)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".dtos.JoinLobbyPayload: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.dtos.JoinLobbyPayload();
            if (object.lobbyId != null)
                if (typeof object.lobbyId !== "string" || object.lobbyId.length)
                    message.lobbyId = $String(object.lobbyId);
            return message;
        };

        /**
         * Creates a plain object from a JoinLobbyPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dtos.JoinLobbyPayload
         * @static
         * @param {dtos.JoinLobbyPayload} message JoinLobbyPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinLobbyPayload.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                object.lobbyId = "";
            if (message.lobbyId != null && $Object.hasOwnProperty.call(message, "lobbyId"))
                object.lobbyId = message.lobbyId;
            return object;
        };

        /**
         * Converts this JoinLobbyPayload to JSON.
         * @function toJSON
         * @memberof dtos.JoinLobbyPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinLobbyPayload.prototype.toJSON = function() {
            return JoinLobbyPayload.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for JoinLobbyPayload
         * @function getTypeUrl
         * @memberof dtos.JoinLobbyPayload
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        JoinLobbyPayload.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/dtos.JoinLobbyPayload";
        };

        return JoinLobbyPayload;
    })();

    dtos.StartGamePayload = (function() {

        /**
         * Properties of a StartGamePayload.
         * @typedef {Object} dtos.StartGamePayload.$Properties
         * @property {string|null} [lobbyId] StartGamePayload lobbyId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a StartGamePayload.
         * @memberof dtos
         * @interface IStartGamePayload
         * @augments dtos.StartGamePayload.$Properties
         * @deprecated Use dtos.StartGamePayload.$Properties instead.
         */

        /**
         * Shape of a StartGamePayload.
         * @typedef {dtos.StartGamePayload.$Properties} dtos.StartGamePayload.$Shape
         */

        /**
         * Constructs a new StartGamePayload.
         * @memberof dtos
         * @classdesc Represents a StartGamePayload.
         * @constructor
         * @param {dtos.StartGamePayload.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const StartGamePayload = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * StartGamePayload lobbyId.
         * @member {string} lobbyId
         * @memberof dtos.StartGamePayload
         * @instance
         */
        StartGamePayload.prototype.lobbyId = "";

        /**
         * Creates a new StartGamePayload instance using the specified properties.
         * @function create
         * @memberof dtos.StartGamePayload
         * @static
         * @param {dtos.StartGamePayload.$Properties=} [properties] Properties to set
         * @returns {dtos.StartGamePayload} StartGamePayload instance
         * @type {{
         *   (properties: dtos.StartGamePayload.$Shape): dtos.StartGamePayload & dtos.StartGamePayload.$Shape;
         *   (properties?: dtos.StartGamePayload.$Properties): dtos.StartGamePayload;
         * }}
         */
        StartGamePayload.create = function(properties) {
            return new StartGamePayload(properties);
        };

        /**
         * Encodes the specified StartGamePayload message. Does not implicitly {@link dtos.StartGamePayload.verify|verify} messages.
         * @function encode
         * @memberof dtos.StartGamePayload
         * @static
         * @param {dtos.StartGamePayload.$Properties} message StartGamePayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartGamePayload.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.lobbyId != null && $Object.hasOwnProperty.call(message, "lobbyId") && message.lobbyId !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.lobbyId);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified StartGamePayload message, length delimited. Does not implicitly {@link dtos.StartGamePayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dtos.StartGamePayload
         * @static
         * @param {dtos.StartGamePayload.$Properties} message StartGamePayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartGamePayload.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a StartGamePayload message from the specified reader or buffer.
         * @function decode
         * @memberof dtos.StartGamePayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dtos.StartGamePayload & dtos.StartGamePayload.$Shape} StartGamePayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartGamePayload.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.dtos.StartGamePayload(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.lobbyId = value;
                        else
                            delete message.lobbyId;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a StartGamePayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dtos.StartGamePayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dtos.StartGamePayload & dtos.StartGamePayload.$Shape} StartGamePayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartGamePayload.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartGamePayload message.
         * @function verify
         * @memberof dtos.StartGamePayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartGamePayload.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.lobbyId != null && $Object.hasOwnProperty.call(message, "lobbyId"))
                if (!$util.isString(message.lobbyId))
                    return "lobbyId: string expected";
            return null;
        };

        /**
         * Creates a StartGamePayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dtos.StartGamePayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dtos.StartGamePayload} StartGamePayload
         */
        StartGamePayload.fromObject = function (object, _depth) {
            if (object instanceof $root.dtos.StartGamePayload)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".dtos.StartGamePayload: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.dtos.StartGamePayload();
            if (object.lobbyId != null)
                if (typeof object.lobbyId !== "string" || object.lobbyId.length)
                    message.lobbyId = $String(object.lobbyId);
            return message;
        };

        /**
         * Creates a plain object from a StartGamePayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dtos.StartGamePayload
         * @static
         * @param {dtos.StartGamePayload} message StartGamePayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartGamePayload.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                object.lobbyId = "";
            if (message.lobbyId != null && $Object.hasOwnProperty.call(message, "lobbyId"))
                object.lobbyId = message.lobbyId;
            return object;
        };

        /**
         * Converts this StartGamePayload to JSON.
         * @function toJSON
         * @memberof dtos.StartGamePayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartGamePayload.prototype.toJSON = function() {
            return StartGamePayload.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for StartGamePayload
         * @function getTypeUrl
         * @memberof dtos.StartGamePayload
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        StartGamePayload.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/dtos.StartGamePayload";
        };

        return StartGamePayload;
    })();

    dtos.GetGameHistoryPayload = (function() {

        /**
         * Properties of a GetGameHistoryPayload.
         * @typedef {Object} dtos.GetGameHistoryPayload.$Properties
         * @property {number|Long|null} [playerId] GetGameHistoryPayload playerId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a GetGameHistoryPayload.
         * @memberof dtos
         * @interface IGetGameHistoryPayload
         * @augments dtos.GetGameHistoryPayload.$Properties
         * @deprecated Use dtos.GetGameHistoryPayload.$Properties instead.
         */

        /**
         * Shape of a GetGameHistoryPayload.
         * @typedef {dtos.GetGameHistoryPayload.$Properties} dtos.GetGameHistoryPayload.$Shape
         */

        /**
         * Constructs a new GetGameHistoryPayload.
         * @memberof dtos
         * @classdesc Represents a GetGameHistoryPayload.
         * @constructor
         * @param {dtos.GetGameHistoryPayload.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const GetGameHistoryPayload = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * GetGameHistoryPayload playerId.
         * @member {number|Long} playerId
         * @memberof dtos.GetGameHistoryPayload
         * @instance
         */
        GetGameHistoryPayload.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetGameHistoryPayload instance using the specified properties.
         * @function create
         * @memberof dtos.GetGameHistoryPayload
         * @static
         * @param {dtos.GetGameHistoryPayload.$Properties=} [properties] Properties to set
         * @returns {dtos.GetGameHistoryPayload} GetGameHistoryPayload instance
         * @type {{
         *   (properties: dtos.GetGameHistoryPayload.$Shape): dtos.GetGameHistoryPayload & dtos.GetGameHistoryPayload.$Shape;
         *   (properties?: dtos.GetGameHistoryPayload.$Properties): dtos.GetGameHistoryPayload;
         * }}
         */
        GetGameHistoryPayload.create = function(properties) {
            return new GetGameHistoryPayload(properties);
        };

        /**
         * Encodes the specified GetGameHistoryPayload message. Does not implicitly {@link dtos.GetGameHistoryPayload.verify|verify} messages.
         * @function encode
         * @memberof dtos.GetGameHistoryPayload
         * @static
         * @param {dtos.GetGameHistoryPayload.$Properties} message GetGameHistoryPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGameHistoryPayload.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.playerId != null && $Object.hasOwnProperty.call(message, "playerId") && (typeof message.playerId === "object" ? message.playerId.low || message.playerId.high : message.playerId !== 0))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified GetGameHistoryPayload message, length delimited. Does not implicitly {@link dtos.GetGameHistoryPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dtos.GetGameHistoryPayload
         * @static
         * @param {dtos.GetGameHistoryPayload.$Properties} message GetGameHistoryPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGameHistoryPayload.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a GetGameHistoryPayload message from the specified reader or buffer.
         * @function decode
         * @memberof dtos.GetGameHistoryPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dtos.GetGameHistoryPayload & dtos.GetGameHistoryPayload.$Shape} GetGameHistoryPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGameHistoryPayload.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.dtos.GetGameHistoryPayload(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.playerId = value;
                        else
                            delete message.playerId;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a GetGameHistoryPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dtos.GetGameHistoryPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dtos.GetGameHistoryPayload & dtos.GetGameHistoryPayload.$Shape} GetGameHistoryPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGameHistoryPayload.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGameHistoryPayload message.
         * @function verify
         * @memberof dtos.GetGameHistoryPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGameHistoryPayload.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.playerId != null && $Object.hasOwnProperty.call(message, "playerId"))
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetGameHistoryPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dtos.GetGameHistoryPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dtos.GetGameHistoryPayload} GetGameHistoryPayload
         */
        GetGameHistoryPayload.fromObject = function (object, _depth) {
            if (object instanceof $root.dtos.GetGameHistoryPayload)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".dtos.GetGameHistoryPayload: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.dtos.GetGameHistoryPayload();
            if (object.playerId != null)
                if (typeof object.playerId === "object" ? object.playerId.low || object.playerId.high : $Number(object.playerId) !== 0)
                    if ($util.Long)
                        message.playerId = $util.Long.fromValue(object.playerId, false);
                    else if (typeof object.playerId === "string")
                        message.playerId = $parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GetGameHistoryPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dtos.GetGameHistoryPayload
         * @static
         * @param {dtos.GetGameHistoryPayload} message GetGameHistoryPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGameHistoryPayload.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.playerId = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.playerId = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
            if (message.playerId != null && $Object.hasOwnProperty.call(message, "playerId"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.playerId = typeof message.playerId === "number" ? $BigInt(message.playerId) : $util.Long.fromBits(message.playerId.low >>> 0, message.playerId.high >>> 0, false).toBigInt();
                else if (typeof message.playerId === "number")
                    object.playerId = options.longs === $String ? $String(message.playerId) : message.playerId;
                else
                    object.playerId = options.longs === $String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === $Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
            return object;
        };

        /**
         * Converts this GetGameHistoryPayload to JSON.
         * @function toJSON
         * @memberof dtos.GetGameHistoryPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGameHistoryPayload.prototype.toJSON = function() {
            return GetGameHistoryPayload.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for GetGameHistoryPayload
         * @function getTypeUrl
         * @memberof dtos.GetGameHistoryPayload
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        GetGameHistoryPayload.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/dtos.GetGameHistoryPayload";
        };

        return GetGameHistoryPayload;
    })();

    dtos.NewLobbyAvailableEvent = (function() {

        /**
         * Properties of a NewLobbyAvailableEvent.
         * @typedef {Object} dtos.NewLobbyAvailableEvent.$Properties
         * @property {string|null} [lobbyId] NewLobbyAvailableEvent lobbyId
         * @property {number|null} [maxPlayers] NewLobbyAvailableEvent maxPlayers
         * @property {number|Long|null} [hostId] NewLobbyAvailableEvent hostId
         * @property {string|null} [hostUsername] NewLobbyAvailableEvent hostUsername
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a NewLobbyAvailableEvent.
         * @memberof dtos
         * @interface INewLobbyAvailableEvent
         * @augments dtos.NewLobbyAvailableEvent.$Properties
         * @deprecated Use dtos.NewLobbyAvailableEvent.$Properties instead.
         */

        /**
         * Shape of a NewLobbyAvailableEvent.
         * @typedef {dtos.NewLobbyAvailableEvent.$Properties} dtos.NewLobbyAvailableEvent.$Shape
         */

        /**
         * Constructs a new NewLobbyAvailableEvent.
         * @memberof dtos
         * @classdesc Represents a NewLobbyAvailableEvent.
         * @constructor
         * @param {dtos.NewLobbyAvailableEvent.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const NewLobbyAvailableEvent = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * NewLobbyAvailableEvent lobbyId.
         * @member {string} lobbyId
         * @memberof dtos.NewLobbyAvailableEvent
         * @instance
         */
        NewLobbyAvailableEvent.prototype.lobbyId = "";

        /**
         * NewLobbyAvailableEvent maxPlayers.
         * @member {number} maxPlayers
         * @memberof dtos.NewLobbyAvailableEvent
         * @instance
         */
        NewLobbyAvailableEvent.prototype.maxPlayers = 0;

        /**
         * NewLobbyAvailableEvent hostId.
         * @member {number|Long} hostId
         * @memberof dtos.NewLobbyAvailableEvent
         * @instance
         */
        NewLobbyAvailableEvent.prototype.hostId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NewLobbyAvailableEvent hostUsername.
         * @member {string} hostUsername
         * @memberof dtos.NewLobbyAvailableEvent
         * @instance
         */
        NewLobbyAvailableEvent.prototype.hostUsername = "";

        /**
         * Creates a new NewLobbyAvailableEvent instance using the specified properties.
         * @function create
         * @memberof dtos.NewLobbyAvailableEvent
         * @static
         * @param {dtos.NewLobbyAvailableEvent.$Properties=} [properties] Properties to set
         * @returns {dtos.NewLobbyAvailableEvent} NewLobbyAvailableEvent instance
         * @type {{
         *   (properties: dtos.NewLobbyAvailableEvent.$Shape): dtos.NewLobbyAvailableEvent & dtos.NewLobbyAvailableEvent.$Shape;
         *   (properties?: dtos.NewLobbyAvailableEvent.$Properties): dtos.NewLobbyAvailableEvent;
         * }}
         */
        NewLobbyAvailableEvent.create = function(properties) {
            return new NewLobbyAvailableEvent(properties);
        };

        /**
         * Encodes the specified NewLobbyAvailableEvent message. Does not implicitly {@link dtos.NewLobbyAvailableEvent.verify|verify} messages.
         * @function encode
         * @memberof dtos.NewLobbyAvailableEvent
         * @static
         * @param {dtos.NewLobbyAvailableEvent.$Properties} message NewLobbyAvailableEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewLobbyAvailableEvent.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.lobbyId != null && $Object.hasOwnProperty.call(message, "lobbyId") && message.lobbyId !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.lobbyId);
            if (message.maxPlayers != null && $Object.hasOwnProperty.call(message, "maxPlayers") && message.maxPlayers !== 0)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.maxPlayers);
            if (message.hostId != null && $Object.hasOwnProperty.call(message, "hostId") && (typeof message.hostId === "object" ? message.hostId.low || message.hostId.high : message.hostId !== 0))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.hostId);
            if (message.hostUsername != null && $Object.hasOwnProperty.call(message, "hostUsername") && message.hostUsername !== "")
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.hostUsername);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified NewLobbyAvailableEvent message, length delimited. Does not implicitly {@link dtos.NewLobbyAvailableEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dtos.NewLobbyAvailableEvent
         * @static
         * @param {dtos.NewLobbyAvailableEvent.$Properties} message NewLobbyAvailableEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewLobbyAvailableEvent.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a NewLobbyAvailableEvent message from the specified reader or buffer.
         * @function decode
         * @memberof dtos.NewLobbyAvailableEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dtos.NewLobbyAvailableEvent & dtos.NewLobbyAvailableEvent.$Shape} NewLobbyAvailableEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewLobbyAvailableEvent.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.dtos.NewLobbyAvailableEvent(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.lobbyId = value;
                        else
                            delete message.lobbyId;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.maxPlayers = value;
                        else
                            delete message.maxPlayers;
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.hostId = value;
                        else
                            delete message.hostId;
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.hostUsername = value;
                        else
                            delete message.hostUsername;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a NewLobbyAvailableEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dtos.NewLobbyAvailableEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dtos.NewLobbyAvailableEvent & dtos.NewLobbyAvailableEvent.$Shape} NewLobbyAvailableEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewLobbyAvailableEvent.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NewLobbyAvailableEvent message.
         * @function verify
         * @memberof dtos.NewLobbyAvailableEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NewLobbyAvailableEvent.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.lobbyId != null && $Object.hasOwnProperty.call(message, "lobbyId"))
                if (!$util.isString(message.lobbyId))
                    return "lobbyId: string expected";
            if (message.maxPlayers != null && $Object.hasOwnProperty.call(message, "maxPlayers"))
                if (!$util.isInteger(message.maxPlayers))
                    return "maxPlayers: integer expected";
            if (message.hostId != null && $Object.hasOwnProperty.call(message, "hostId"))
                if (!$util.isInteger(message.hostId) && !(message.hostId && $util.isInteger(message.hostId.low) && $util.isInteger(message.hostId.high)))
                    return "hostId: integer|Long expected";
            if (message.hostUsername != null && $Object.hasOwnProperty.call(message, "hostUsername"))
                if (!$util.isString(message.hostUsername))
                    return "hostUsername: string expected";
            return null;
        };

        /**
         * Creates a NewLobbyAvailableEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dtos.NewLobbyAvailableEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dtos.NewLobbyAvailableEvent} NewLobbyAvailableEvent
         */
        NewLobbyAvailableEvent.fromObject = function (object, _depth) {
            if (object instanceof $root.dtos.NewLobbyAvailableEvent)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".dtos.NewLobbyAvailableEvent: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.dtos.NewLobbyAvailableEvent();
            if (object.lobbyId != null)
                if (typeof object.lobbyId !== "string" || object.lobbyId.length)
                    message.lobbyId = $String(object.lobbyId);
            if (object.maxPlayers != null)
                if ($Number(object.maxPlayers) !== 0)
                    message.maxPlayers = object.maxPlayers | 0;
            if (object.hostId != null)
                if (typeof object.hostId === "object" ? object.hostId.low || object.hostId.high : $Number(object.hostId) !== 0)
                    if ($util.Long)
                        message.hostId = $util.Long.fromValue(object.hostId, false);
                    else if (typeof object.hostId === "string")
                        message.hostId = $parseInt(object.hostId, 10);
                    else if (typeof object.hostId === "number")
                        message.hostId = object.hostId;
                    else if (typeof object.hostId === "object")
                        message.hostId = new $util.LongBits(object.hostId.low >>> 0, object.hostId.high >>> 0).toNumber();
            if (object.hostUsername != null)
                if (typeof object.hostUsername !== "string" || object.hostUsername.length)
                    message.hostUsername = $String(object.hostUsername);
            return message;
        };

        /**
         * Creates a plain object from a NewLobbyAvailableEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dtos.NewLobbyAvailableEvent
         * @static
         * @param {dtos.NewLobbyAvailableEvent} message NewLobbyAvailableEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NewLobbyAvailableEvent.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.lobbyId = "";
                object.maxPlayers = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.hostId = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.hostId = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                object.hostUsername = "";
            }
            if (message.lobbyId != null && $Object.hasOwnProperty.call(message, "lobbyId"))
                object.lobbyId = message.lobbyId;
            if (message.maxPlayers != null && $Object.hasOwnProperty.call(message, "maxPlayers"))
                object.maxPlayers = message.maxPlayers;
            if (message.hostId != null && $Object.hasOwnProperty.call(message, "hostId"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.hostId = typeof message.hostId === "number" ? $BigInt(message.hostId) : $util.Long.fromBits(message.hostId.low >>> 0, message.hostId.high >>> 0, false).toBigInt();
                else if (typeof message.hostId === "number")
                    object.hostId = options.longs === $String ? $String(message.hostId) : message.hostId;
                else
                    object.hostId = options.longs === $String ? $util.Long.prototype.toString.call(message.hostId) : options.longs === $Number ? new $util.LongBits(message.hostId.low >>> 0, message.hostId.high >>> 0).toNumber() : message.hostId;
            if (message.hostUsername != null && $Object.hasOwnProperty.call(message, "hostUsername"))
                object.hostUsername = message.hostUsername;
            return object;
        };

        /**
         * Converts this NewLobbyAvailableEvent to JSON.
         * @function toJSON
         * @memberof dtos.NewLobbyAvailableEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NewLobbyAvailableEvent.prototype.toJSON = function() {
            return NewLobbyAvailableEvent.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for NewLobbyAvailableEvent
         * @function getTypeUrl
         * @memberof dtos.NewLobbyAvailableEvent
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        NewLobbyAvailableEvent.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/dtos.NewLobbyAvailableEvent";
        };

        return NewLobbyAvailableEvent;
    })();

    dtos.PlayerJoinedLobbyEvent = (function() {

        /**
         * Properties of a PlayerJoinedLobbyEvent.
         * @typedef {Object} dtos.PlayerJoinedLobbyEvent.$Properties
         * @property {string|null} [lobbyId] PlayerJoinedLobbyEvent lobbyId
         * @property {number|Long|null} [playerId] PlayerJoinedLobbyEvent playerId
         * @property {string|null} [playerUsername] PlayerJoinedLobbyEvent playerUsername
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a PlayerJoinedLobbyEvent.
         * @memberof dtos
         * @interface IPlayerJoinedLobbyEvent
         * @augments dtos.PlayerJoinedLobbyEvent.$Properties
         * @deprecated Use dtos.PlayerJoinedLobbyEvent.$Properties instead.
         */

        /**
         * Shape of a PlayerJoinedLobbyEvent.
         * @typedef {dtos.PlayerJoinedLobbyEvent.$Properties} dtos.PlayerJoinedLobbyEvent.$Shape
         */

        /**
         * Constructs a new PlayerJoinedLobbyEvent.
         * @memberof dtos
         * @classdesc Represents a PlayerJoinedLobbyEvent.
         * @constructor
         * @param {dtos.PlayerJoinedLobbyEvent.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const PlayerJoinedLobbyEvent = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * PlayerJoinedLobbyEvent lobbyId.
         * @member {string} lobbyId
         * @memberof dtos.PlayerJoinedLobbyEvent
         * @instance
         */
        PlayerJoinedLobbyEvent.prototype.lobbyId = "";

        /**
         * PlayerJoinedLobbyEvent playerId.
         * @member {number|Long} playerId
         * @memberof dtos.PlayerJoinedLobbyEvent
         * @instance
         */
        PlayerJoinedLobbyEvent.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlayerJoinedLobbyEvent playerUsername.
         * @member {string} playerUsername
         * @memberof dtos.PlayerJoinedLobbyEvent
         * @instance
         */
        PlayerJoinedLobbyEvent.prototype.playerUsername = "";

        /**
         * Creates a new PlayerJoinedLobbyEvent instance using the specified properties.
         * @function create
         * @memberof dtos.PlayerJoinedLobbyEvent
         * @static
         * @param {dtos.PlayerJoinedLobbyEvent.$Properties=} [properties] Properties to set
         * @returns {dtos.PlayerJoinedLobbyEvent} PlayerJoinedLobbyEvent instance
         * @type {{
         *   (properties: dtos.PlayerJoinedLobbyEvent.$Shape): dtos.PlayerJoinedLobbyEvent & dtos.PlayerJoinedLobbyEvent.$Shape;
         *   (properties?: dtos.PlayerJoinedLobbyEvent.$Properties): dtos.PlayerJoinedLobbyEvent;
         * }}
         */
        PlayerJoinedLobbyEvent.create = function(properties) {
            return new PlayerJoinedLobbyEvent(properties);
        };

        /**
         * Encodes the specified PlayerJoinedLobbyEvent message. Does not implicitly {@link dtos.PlayerJoinedLobbyEvent.verify|verify} messages.
         * @function encode
         * @memberof dtos.PlayerJoinedLobbyEvent
         * @static
         * @param {dtos.PlayerJoinedLobbyEvent.$Properties} message PlayerJoinedLobbyEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerJoinedLobbyEvent.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.lobbyId != null && $Object.hasOwnProperty.call(message, "lobbyId") && message.lobbyId !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.lobbyId);
            if (message.playerId != null && $Object.hasOwnProperty.call(message, "playerId") && (typeof message.playerId === "object" ? message.playerId.low || message.playerId.high : message.playerId !== 0))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.playerId);
            if (message.playerUsername != null && $Object.hasOwnProperty.call(message, "playerUsername") && message.playerUsername !== "")
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.playerUsername);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified PlayerJoinedLobbyEvent message, length delimited. Does not implicitly {@link dtos.PlayerJoinedLobbyEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dtos.PlayerJoinedLobbyEvent
         * @static
         * @param {dtos.PlayerJoinedLobbyEvent.$Properties} message PlayerJoinedLobbyEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerJoinedLobbyEvent.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a PlayerJoinedLobbyEvent message from the specified reader or buffer.
         * @function decode
         * @memberof dtos.PlayerJoinedLobbyEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dtos.PlayerJoinedLobbyEvent & dtos.PlayerJoinedLobbyEvent.$Shape} PlayerJoinedLobbyEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerJoinedLobbyEvent.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.dtos.PlayerJoinedLobbyEvent(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.lobbyId = value;
                        else
                            delete message.lobbyId;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.playerId = value;
                        else
                            delete message.playerId;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.playerUsername = value;
                        else
                            delete message.playerUsername;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a PlayerJoinedLobbyEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dtos.PlayerJoinedLobbyEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dtos.PlayerJoinedLobbyEvent & dtos.PlayerJoinedLobbyEvent.$Shape} PlayerJoinedLobbyEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerJoinedLobbyEvent.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerJoinedLobbyEvent message.
         * @function verify
         * @memberof dtos.PlayerJoinedLobbyEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerJoinedLobbyEvent.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.lobbyId != null && $Object.hasOwnProperty.call(message, "lobbyId"))
                if (!$util.isString(message.lobbyId))
                    return "lobbyId: string expected";
            if (message.playerId != null && $Object.hasOwnProperty.call(message, "playerId"))
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
            if (message.playerUsername != null && $Object.hasOwnProperty.call(message, "playerUsername"))
                if (!$util.isString(message.playerUsername))
                    return "playerUsername: string expected";
            return null;
        };

        /**
         * Creates a PlayerJoinedLobbyEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dtos.PlayerJoinedLobbyEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dtos.PlayerJoinedLobbyEvent} PlayerJoinedLobbyEvent
         */
        PlayerJoinedLobbyEvent.fromObject = function (object, _depth) {
            if (object instanceof $root.dtos.PlayerJoinedLobbyEvent)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".dtos.PlayerJoinedLobbyEvent: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.dtos.PlayerJoinedLobbyEvent();
            if (object.lobbyId != null)
                if (typeof object.lobbyId !== "string" || object.lobbyId.length)
                    message.lobbyId = $String(object.lobbyId);
            if (object.playerId != null)
                if (typeof object.playerId === "object" ? object.playerId.low || object.playerId.high : $Number(object.playerId) !== 0)
                    if ($util.Long)
                        message.playerId = $util.Long.fromValue(object.playerId, false);
                    else if (typeof object.playerId === "string")
                        message.playerId = $parseInt(object.playerId, 10);
                    else if (typeof object.playerId === "number")
                        message.playerId = object.playerId;
                    else if (typeof object.playerId === "object")
                        message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
            if (object.playerUsername != null)
                if (typeof object.playerUsername !== "string" || object.playerUsername.length)
                    message.playerUsername = $String(object.playerUsername);
            return message;
        };

        /**
         * Creates a plain object from a PlayerJoinedLobbyEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dtos.PlayerJoinedLobbyEvent
         * @static
         * @param {dtos.PlayerJoinedLobbyEvent} message PlayerJoinedLobbyEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerJoinedLobbyEvent.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.lobbyId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.playerId = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.playerId = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                object.playerUsername = "";
            }
            if (message.lobbyId != null && $Object.hasOwnProperty.call(message, "lobbyId"))
                object.lobbyId = message.lobbyId;
            if (message.playerId != null && $Object.hasOwnProperty.call(message, "playerId"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.playerId = typeof message.playerId === "number" ? $BigInt(message.playerId) : $util.Long.fromBits(message.playerId.low >>> 0, message.playerId.high >>> 0, false).toBigInt();
                else if (typeof message.playerId === "number")
                    object.playerId = options.longs === $String ? $String(message.playerId) : message.playerId;
                else
                    object.playerId = options.longs === $String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === $Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
            if (message.playerUsername != null && $Object.hasOwnProperty.call(message, "playerUsername"))
                object.playerUsername = message.playerUsername;
            return object;
        };

        /**
         * Converts this PlayerJoinedLobbyEvent to JSON.
         * @function toJSON
         * @memberof dtos.PlayerJoinedLobbyEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerJoinedLobbyEvent.prototype.toJSON = function() {
            return PlayerJoinedLobbyEvent.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for PlayerJoinedLobbyEvent
         * @function getTypeUrl
         * @memberof dtos.PlayerJoinedLobbyEvent
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PlayerJoinedLobbyEvent.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/dtos.PlayerJoinedLobbyEvent";
        };

        return PlayerJoinedLobbyEvent;
    })();

    dtos.Message = (function() {

        /**
         * Properties of a Message.
         * @typedef {Object} dtos.Message.$Properties
         * @property {dtos.MessageType|null} [type] Message type
         * @property {dtos.CreateLobbyPayload.$Properties|null} [createLobby] Message createLobby
         * @property {dtos.JoinLobbyPayload.$Properties|null} [joinLobby] Message joinLobby
         * @property {dtos.StartGamePayload.$Properties|null} [startGame] Message startGame
         * @property {dtos.GetGameHistoryPayload.$Properties|null} [getHistory] Message getHistory
         * @property {dtos.NewLobbyAvailableEvent.$Properties|null} [newLobbyAvailable] Message newLobbyAvailable
         * @property {dtos.PlayerJoinedLobbyEvent.$Properties|null} [playerJoined] Message playerJoined
         * @property {"createLobby"|"joinLobby"|"startGame"|"getHistory"|"newLobbyAvailable"|"playerJoined"} [payload] Message payload
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Message.
         * @memberof dtos
         * @interface IMessage
         * @augments dtos.Message.$Properties
         * @deprecated Use dtos.Message.$Properties instead.
         */

        /**
         * Narrowed shape of a Message.
         * @typedef {{
         *   type?: dtos.MessageType|null;
         *   createLobby?: dtos.CreateLobbyPayload.$Shape|null;
         *   joinLobby?: dtos.JoinLobbyPayload.$Shape|null;
         *   startGame?: dtos.StartGamePayload.$Shape|null;
         *   getHistory?: dtos.GetGameHistoryPayload.$Shape|null;
         *   newLobbyAvailable?: dtos.NewLobbyAvailableEvent.$Shape|null;
         *   playerJoined?: dtos.PlayerJoinedLobbyEvent.$Shape|null;
         *   $unknowns?: Array.<Uint8Array>;
         * } & (
         *   ({ payload?: undefined; createLobby?: null; joinLobby?: null; startGame?: null; getHistory?: null; newLobbyAvailable?: null; playerJoined?: null }|{ payload?: "createLobby"; createLobby: dtos.CreateLobbyPayload.$Shape; joinLobby?: null; startGame?: null; getHistory?: null; newLobbyAvailable?: null; playerJoined?: null }|{ payload?: "joinLobby"; createLobby?: null; joinLobby: dtos.JoinLobbyPayload.$Shape; startGame?: null; getHistory?: null; newLobbyAvailable?: null; playerJoined?: null }|{ payload?: "startGame"; createLobby?: null; joinLobby?: null; startGame: dtos.StartGamePayload.$Shape; getHistory?: null; newLobbyAvailable?: null; playerJoined?: null }|{ payload?: "getHistory"; createLobby?: null; joinLobby?: null; startGame?: null; getHistory: dtos.GetGameHistoryPayload.$Shape; newLobbyAvailable?: null; playerJoined?: null }|{ payload?: "newLobbyAvailable"; createLobby?: null; joinLobby?: null; startGame?: null; getHistory?: null; newLobbyAvailable: dtos.NewLobbyAvailableEvent.$Shape; playerJoined?: null }|{ payload?: "playerJoined"; createLobby?: null; joinLobby?: null; startGame?: null; getHistory?: null; newLobbyAvailable?: null; playerJoined: dtos.PlayerJoinedLobbyEvent.$Shape })
         * )} dtos.Message.$Shape
         */

        /**
         * Constructs a new Message.
         * @memberof dtos
         * @classdesc Represents a Message.
         * @constructor
         * @param {dtos.Message.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const Message = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Message type.
         * @member {dtos.MessageType} type
         * @memberof dtos.Message
         * @instance
         */
        Message.prototype.type = 0;

        /**
         * Message createLobby.
         * @member {dtos.CreateLobbyPayload.$Properties|null|undefined} createLobby
         * @memberof dtos.Message
         * @instance
         */
        Message.prototype.createLobby = null;

        /**
         * Message joinLobby.
         * @member {dtos.JoinLobbyPayload.$Properties|null|undefined} joinLobby
         * @memberof dtos.Message
         * @instance
         */
        Message.prototype.joinLobby = null;

        /**
         * Message startGame.
         * @member {dtos.StartGamePayload.$Properties|null|undefined} startGame
         * @memberof dtos.Message
         * @instance
         */
        Message.prototype.startGame = null;

        /**
         * Message getHistory.
         * @member {dtos.GetGameHistoryPayload.$Properties|null|undefined} getHistory
         * @memberof dtos.Message
         * @instance
         */
        Message.prototype.getHistory = null;

        /**
         * Message newLobbyAvailable.
         * @member {dtos.NewLobbyAvailableEvent.$Properties|null|undefined} newLobbyAvailable
         * @memberof dtos.Message
         * @instance
         */
        Message.prototype.newLobbyAvailable = null;

        /**
         * Message playerJoined.
         * @member {dtos.PlayerJoinedLobbyEvent.$Properties|null|undefined} playerJoined
         * @memberof dtos.Message
         * @instance
         */
        Message.prototype.playerJoined = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Message payload.
         * @member {"createLobby"|"joinLobby"|"startGame"|"getHistory"|"newLobbyAvailable"|"playerJoined"|undefined} payload
         * @memberof dtos.Message
         * @instance
         */
        $Object.defineProperty(Message.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["createLobby", "joinLobby", "startGame", "getHistory", "newLobbyAvailable", "playerJoined"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof dtos.Message
         * @static
         * @param {dtos.Message.$Properties=} [properties] Properties to set
         * @returns {dtos.Message} Message instance
         * @type {{
         *   (properties: dtos.Message.$Shape): dtos.Message & dtos.Message.$Shape;
         *   (properties?: dtos.Message.$Properties): dtos.Message;
         * }}
         */
        Message.create = function(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link dtos.Message.verify|verify} messages.
         * @function encode
         * @memberof dtos.Message
         * @static
         * @param {dtos.Message.$Properties} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.type != null && $Object.hasOwnProperty.call(message, "type") && message.type !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.createLobby != null && $Object.hasOwnProperty.call(message, "createLobby"))
                $root.dtos.CreateLobbyPayload.encode(message.createLobby, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.joinLobby != null && $Object.hasOwnProperty.call(message, "joinLobby"))
                $root.dtos.JoinLobbyPayload.encode(message.joinLobby, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
            if (message.startGame != null && $Object.hasOwnProperty.call(message, "startGame"))
                $root.dtos.StartGamePayload.encode(message.startGame, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
            if (message.getHistory != null && $Object.hasOwnProperty.call(message, "getHistory"))
                $root.dtos.GetGameHistoryPayload.encode(message.getHistory, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            if (message.newLobbyAvailable != null && $Object.hasOwnProperty.call(message, "newLobbyAvailable"))
                $root.dtos.NewLobbyAvailableEvent.encode(message.newLobbyAvailable, writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
            if (message.playerJoined != null && $Object.hasOwnProperty.call(message, "playerJoined"))
                $root.dtos.PlayerJoinedLobbyEvent.encode(message.playerJoined, writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link dtos.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dtos.Message
         * @static
         * @param {dtos.Message.$Properties} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof dtos.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dtos.Message & dtos.Message.$Shape} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.dtos.Message(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.type = value;
                        else
                            delete message.type;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.createLobby = $root.dtos.CreateLobbyPayload.decode(reader, reader.uint32(), $undefined, _depth + 1, message.createLobby);
                        message.payload = "createLobby";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.joinLobby = $root.dtos.JoinLobbyPayload.decode(reader, reader.uint32(), $undefined, _depth + 1, message.joinLobby);
                        message.payload = "joinLobby";
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        message.startGame = $root.dtos.StartGamePayload.decode(reader, reader.uint32(), $undefined, _depth + 1, message.startGame);
                        message.payload = "startGame";
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        message.getHistory = $root.dtos.GetGameHistoryPayload.decode(reader, reader.uint32(), $undefined, _depth + 1, message.getHistory);
                        message.payload = "getHistory";
                        continue;
                    }
                case 6: {
                        if (wireType !== 2)
                            break;
                        message.newLobbyAvailable = $root.dtos.NewLobbyAvailableEvent.decode(reader, reader.uint32(), $undefined, _depth + 1, message.newLobbyAvailable);
                        message.payload = "newLobbyAvailable";
                        continue;
                    }
                case 7: {
                        if (wireType !== 2)
                            break;
                        message.playerJoined = $root.dtos.PlayerJoinedLobbyEvent.decode(reader, reader.uint32(), $undefined, _depth + 1, message.playerJoined);
                        message.payload = "playerJoined";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dtos.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dtos.Message & dtos.Message.$Shape} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof dtos.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                if (typeof message.type !== "number" || (message.type | 0) !== message.type)
                    return "type: enum value expected";
            if (message.createLobby != null && $Object.hasOwnProperty.call(message, "createLobby")) {
                properties.payload = 1;
                {
                    let error = $root.dtos.CreateLobbyPayload.verify(message.createLobby, _depth + 1);
                    if (error)
                        return "createLobby." + error;
                }
            }
            if (message.joinLobby != null && $Object.hasOwnProperty.call(message, "joinLobby")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.dtos.JoinLobbyPayload.verify(message.joinLobby, _depth + 1);
                    if (error)
                        return "joinLobby." + error;
                }
            }
            if (message.startGame != null && $Object.hasOwnProperty.call(message, "startGame")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.dtos.StartGamePayload.verify(message.startGame, _depth + 1);
                    if (error)
                        return "startGame." + error;
                }
            }
            if (message.getHistory != null && $Object.hasOwnProperty.call(message, "getHistory")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.dtos.GetGameHistoryPayload.verify(message.getHistory, _depth + 1);
                    if (error)
                        return "getHistory." + error;
                }
            }
            if (message.newLobbyAvailable != null && $Object.hasOwnProperty.call(message, "newLobbyAvailable")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.dtos.NewLobbyAvailableEvent.verify(message.newLobbyAvailable, _depth + 1);
                    if (error)
                        return "newLobbyAvailable." + error;
                }
            }
            if (message.playerJoined != null && $Object.hasOwnProperty.call(message, "playerJoined")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.dtos.PlayerJoinedLobbyEvent.verify(message.playerJoined, _depth + 1);
                    if (error)
                        return "playerJoined." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dtos.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dtos.Message} Message
         */
        Message.fromObject = function (object, _depth) {
            if (object instanceof $root.dtos.Message)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".dtos.Message: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let message = new $root.dtos.Message();
            if (object.type !== 0 && (typeof object.type !== "string" || $root.dtos.MessageType[object.type] !== 0))
                switch (object.type) {
                case "UNKNOWN":
                case 0:
                    message.type = 0;
                    break;
                case "GET_GAME_HISTORY":
                case 1:
                    message.type = 1;
                    break;
                case "GET_GAME_LOBBIES":
                case 2:
                    message.type = 2;
                    break;
                case "CREATE_LOBBY":
                case 3:
                    message.type = 3;
                    break;
                case "JOIN_LOBBY":
                case 4:
                    message.type = 4;
                    break;
                case "START_GAME":
                case 5:
                    message.type = 5;
                    break;
                case "NEW_LOBBY_AVAILABLE":
                case 6:
                    message.type = 6;
                    break;
                case "PLAYER_JOINED_LOBBY":
                case 7:
                    message.type = 7;
                    break;
                default:
                    if (typeof object.type === "number" && (object.type | 0) === object.type)
                        message.type = object.type;
                }
            if (object.createLobby != null) {
                if (!$util.isObject(object.createLobby))
                    throw $TypeError(".dtos.Message.createLobby: object expected");
                message.createLobby = $root.dtos.CreateLobbyPayload.fromObject(object.createLobby, _depth + 1);
            }
            if (object.joinLobby != null) {
                if (!$util.isObject(object.joinLobby))
                    throw $TypeError(".dtos.Message.joinLobby: object expected");
                message.joinLobby = $root.dtos.JoinLobbyPayload.fromObject(object.joinLobby, _depth + 1);
            }
            if (object.startGame != null) {
                if (!$util.isObject(object.startGame))
                    throw $TypeError(".dtos.Message.startGame: object expected");
                message.startGame = $root.dtos.StartGamePayload.fromObject(object.startGame, _depth + 1);
            }
            if (object.getHistory != null) {
                if (!$util.isObject(object.getHistory))
                    throw $TypeError(".dtos.Message.getHistory: object expected");
                message.getHistory = $root.dtos.GetGameHistoryPayload.fromObject(object.getHistory, _depth + 1);
            }
            if (object.newLobbyAvailable != null) {
                if (!$util.isObject(object.newLobbyAvailable))
                    throw $TypeError(".dtos.Message.newLobbyAvailable: object expected");
                message.newLobbyAvailable = $root.dtos.NewLobbyAvailableEvent.fromObject(object.newLobbyAvailable, _depth + 1);
            }
            if (object.playerJoined != null) {
                if (!$util.isObject(object.playerJoined))
                    throw $TypeError(".dtos.Message.playerJoined: object expected");
                message.playerJoined = $root.dtos.PlayerJoinedLobbyEvent.fromObject(object.playerJoined, _depth + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dtos.Message
         * @static
         * @param {dtos.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                object.type = options.enums === $String ? "UNKNOWN" : 0;
            if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                object.type = options.enums === $String ? $root.dtos.MessageType[message.type] === $undefined ? message.type : $root.dtos.MessageType[message.type] : message.type;
            if (message.createLobby != null && $Object.hasOwnProperty.call(message, "createLobby")) {
                object.createLobby = $root.dtos.CreateLobbyPayload.toObject(message.createLobby, options, _depth + 1);
                if (options.oneofs)
                    object.payload = "createLobby";
            }
            if (message.joinLobby != null && $Object.hasOwnProperty.call(message, "joinLobby")) {
                object.joinLobby = $root.dtos.JoinLobbyPayload.toObject(message.joinLobby, options, _depth + 1);
                if (options.oneofs)
                    object.payload = "joinLobby";
            }
            if (message.startGame != null && $Object.hasOwnProperty.call(message, "startGame")) {
                object.startGame = $root.dtos.StartGamePayload.toObject(message.startGame, options, _depth + 1);
                if (options.oneofs)
                    object.payload = "startGame";
            }
            if (message.getHistory != null && $Object.hasOwnProperty.call(message, "getHistory")) {
                object.getHistory = $root.dtos.GetGameHistoryPayload.toObject(message.getHistory, options, _depth + 1);
                if (options.oneofs)
                    object.payload = "getHistory";
            }
            if (message.newLobbyAvailable != null && $Object.hasOwnProperty.call(message, "newLobbyAvailable")) {
                object.newLobbyAvailable = $root.dtos.NewLobbyAvailableEvent.toObject(message.newLobbyAvailable, options, _depth + 1);
                if (options.oneofs)
                    object.payload = "newLobbyAvailable";
            }
            if (message.playerJoined != null && $Object.hasOwnProperty.call(message, "playerJoined")) {
                object.playerJoined = $root.dtos.PlayerJoinedLobbyEvent.toObject(message.playerJoined, options, _depth + 1);
                if (options.oneofs)
                    object.payload = "playerJoined";
            }
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof dtos.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function() {
            return Message.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Message
         * @function getTypeUrl
         * @memberof dtos.Message
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Message.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/dtos.Message";
        };

        return Message;
    })();

    return dtos;
})();

export {
  $root as default
};
