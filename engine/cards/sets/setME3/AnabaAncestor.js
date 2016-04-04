"use strict";
const Constants = require ("../../../Constants");
const AnabaAncestorBase = require("../setHML/AnabaAncestor");

class AnabaAncestor extends AnabaAncestorBase {
  constructor(game) {
    super(game, "Anaba Ancestor", "Masters Edition III", "ME3");
  }
}

module.exports = AnabaAncestor;
