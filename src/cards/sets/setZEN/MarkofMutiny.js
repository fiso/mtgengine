"use strict";
const Constants = require ("../../../Constants");
const MarkofMutinyBase = require("../setM13/MarkofMutiny");

class MarkofMutiny extends MarkofMutinyBase {
  constructor(game) {
    super(game, "Mark of Mutiny", "Zendikar", "ZEN");
  }
}

module.exports = MarkofMutiny;
