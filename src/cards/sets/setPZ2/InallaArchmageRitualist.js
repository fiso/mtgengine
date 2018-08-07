"use strict";
const Constants = require ("../../../Constants");
const InallaArchmageRitualistBase = require("../setOC17/InallaArchmageRitualist");

class InallaArchmageRitualist extends InallaArchmageRitualistBase {
  constructor (game) {
    super(game, "Inalla, Archmage Ritualist", "You Make the Cube", "PZ2");
  }
}

module.exports = InallaArchmageRitualist;
