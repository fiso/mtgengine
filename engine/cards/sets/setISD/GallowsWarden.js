"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GallowsWarden extends Card {
  constructor(game) {
    super(game, "Gallows Warden", "Innistrad", "ISD");
  }
}

module.exports = GallowsWarden;
