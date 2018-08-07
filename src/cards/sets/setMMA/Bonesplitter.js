"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bonesplitter extends UnimplementedCard {
  constructor (game) {
    super(game, "Bonesplitter", "Modern Masters", "MMA");
  }
}

module.exports = Bonesplitter;
