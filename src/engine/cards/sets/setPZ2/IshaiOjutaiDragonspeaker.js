"use strict";
const Constants = require ("../../../Constants");
const IshaiOjutaiDragonspeakerBase = require("../setCM2/IshaiOjutaiDragonspeaker");

class IshaiOjutaiDragonspeaker extends IshaiOjutaiDragonspeakerBase {
  constructor (game) {
    super(game, "Ishai, Ojutai Dragonspeaker", "You Make the Cube", "PZ2");
  }
}

module.exports = IshaiOjutaiDragonspeaker;
