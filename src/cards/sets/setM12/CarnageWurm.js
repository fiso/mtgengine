"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarnageWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Carnage Wurm", "Magic 2012", "M12");
  }
}

module.exports = CarnageWurm;
