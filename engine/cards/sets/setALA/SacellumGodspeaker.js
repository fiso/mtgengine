"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SacellumGodspeaker extends Card {
  constructor(game) {
    super(game, "Sacellum Godspeaker", "Shards of Alara", "ALA");
  }
}

module.exports = SacellumGodspeaker;
