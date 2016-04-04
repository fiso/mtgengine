"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RafiqoftheManyBase = require("../setV11/RafiqoftheMany.js");

class RafiqoftheMany extends RafiqoftheManyBase {
  constructor(game) {
    super(game, "Rafiq of the Many", "Shards of Alara", "ALA");
  }
}

module.exports = RafiqoftheMany;
