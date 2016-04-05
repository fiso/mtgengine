"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElandUmbra extends UnimplementedCard {
  constructor(game) {
    super(game, "Eland Umbra", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ElandUmbra;
