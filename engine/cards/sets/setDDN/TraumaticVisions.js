"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TraumaticVisionsBase = require("../setCON/TraumaticVisions.js");

class TraumaticVisions extends TraumaticVisionsBase {
  constructor(game) {
    super(game, "Traumatic Visions", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = TraumaticVisions;
