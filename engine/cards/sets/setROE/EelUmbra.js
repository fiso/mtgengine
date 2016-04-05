"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EelUmbra extends UnimplementedCard {
  constructor(game) {
    super(game, "Eel Umbra", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = EelUmbra;
