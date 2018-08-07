"use strict";
const Constants = require ("../../../Constants");
const MarkofMutinyBase = require("../setIMA/MarkofMutiny");

class MarkofMutiny extends MarkofMutinyBase {
  constructor (game) {
    super(game, "Mark of Mutiny", "Planechase 2012", "PC2");
  }
}

module.exports = MarkofMutiny;
