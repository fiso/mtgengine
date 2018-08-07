"use strict";
const Constants = require ("../../../Constants");
const MarkofMutinyBase = require("../setIMA/MarkofMutiny");

class MarkofMutiny extends MarkofMutinyBase {
  constructor (game) {
    super(game, "Mark of Mutiny", "Magic 2013", "M13");
  }
}

module.exports = MarkofMutiny;
