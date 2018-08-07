"use strict";
const Constants = require ("../../../Constants");
const GalvanicJuggernautBase = require("../setCNS/GalvanicJuggernaut");

class GalvanicJuggernaut extends GalvanicJuggernautBase {
  constructor (game) {
    super(game, "Galvanic Juggernaut", "Innistrad", "ISD");
  }
}

module.exports = GalvanicJuggernaut;
