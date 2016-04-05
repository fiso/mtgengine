"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SacellumGodspeaker extends UnimplementedCard {
  constructor(game) {
    super(game, "Sacellum Godspeaker", "Shards of Alara", "ALA");
  }
}

module.exports = SacellumGodspeaker;
