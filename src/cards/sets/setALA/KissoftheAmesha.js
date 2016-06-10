"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KissoftheAmesha extends UnimplementedCard {
  constructor (game) {
    super(game, "Kiss of the Amesha", "Shards of Alara", "ALA");
  }
}

module.exports = KissoftheAmesha;
