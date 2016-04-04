"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GideonJura extends UnimplementedCard {
  constructor(game) {
    super(game, "Gideon Jura", "Magic 2012", "M12");
  }
}

module.exports = GideonJura;
