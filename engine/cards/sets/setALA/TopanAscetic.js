"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TopanAscetic extends UnimplementedCard {
  constructor(game) {
    super(game, "Topan Ascetic", "Shards of Alara", "ALA");
  }
}

module.exports = TopanAscetic;
