"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bonesplitter extends UnimplementedCard {
  constructor(game) {
    super(game, "Bonesplitter", "Arena League", "pARL");
  }
}

module.exports = Bonesplitter;
