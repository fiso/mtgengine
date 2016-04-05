"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CentaurOmenreader extends UnimplementedCard {
  constructor(game) {
    super(game, "Centaur Omenreader", "Future Sight", "FUT");
  }
}

module.exports = CentaurOmenreader;
