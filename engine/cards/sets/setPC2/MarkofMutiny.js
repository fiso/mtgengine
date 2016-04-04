"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MarkofMutinyBase = require("../setM13/MarkofMutiny.js");

class MarkofMutiny extends MarkofMutinyBase {
  constructor(game) {
    super(game, "Mark of Mutiny", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = MarkofMutiny;
