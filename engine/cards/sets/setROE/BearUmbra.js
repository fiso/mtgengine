"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BearUmbra extends UnimplementedCard {
  constructor(game) {
    super(game, "Bear Umbra", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = BearUmbra;
