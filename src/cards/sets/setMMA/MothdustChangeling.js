"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MothdustChangeling extends UnimplementedCard {
  constructor(game) {
    super(game, "Mothdust Changeling", "Modern Masters", "MMA");
  }
}

module.exports = MothdustChangeling;
