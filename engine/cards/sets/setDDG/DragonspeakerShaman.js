"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragonspeakerShamanBase = require("../setARC/DragonspeakerShaman.js");

class DragonspeakerShaman extends DragonspeakerShamanBase {
  constructor(game) {
    super(game, "Dragonspeaker Shaman", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = DragonspeakerShaman;
