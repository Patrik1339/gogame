package utils

import "encoding/json"

func DecodePayload[T any](raw json.RawMessage) (T, error) {
	var payload T
	err := json.Unmarshal(raw, &payload)
	return payload, err
}

func BuildMessage(msgType string, payload interface{}) ([]byte, error) {
	msg := map[string]interface{}{
		"type": msgType,
	}

	if payload != nil {
		msg["payload"] = payload
	}

	return json.Marshal(msg)
}
