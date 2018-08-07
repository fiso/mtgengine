"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecordStore extends UnimplementedCard {
  constructor (game) {
    super(game, "Record Store", "Unstable", "UST");
  }
}

module.exports = RecordStore;
