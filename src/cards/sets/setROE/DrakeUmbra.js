"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrakeUmbra extends UnimplementedCard {
  constructor(game) {
    super(game, "Drake Umbra", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = DrakeUmbra;
