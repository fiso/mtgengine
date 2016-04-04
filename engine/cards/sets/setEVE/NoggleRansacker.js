"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NoggleRansacker extends Card {
  constructor(game) {
    super(game, "Noggle Ransacker", "Eventide", "EVE");
  }
}

module.exports = NoggleRansacker;
