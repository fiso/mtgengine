"use strict";
const Constants = require ("../../../Constants");
const TraumaticVisionsBase = require("../setCN2/TraumaticVisions");

class TraumaticVisions extends TraumaticVisionsBase {
  constructor (game) {
    super(game, "Traumatic Visions", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = TraumaticVisions;
