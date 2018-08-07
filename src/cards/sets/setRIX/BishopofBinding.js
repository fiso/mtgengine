"use strict";
const Constants = require ("../../../Constants");
const BishopofBindingBase = require("../setPRIX/BishopofBinding");

class BishopofBinding extends BishopofBindingBase {
  constructor (game) {
    super(game, "Bishop of Binding", "Rivals of Ixalan", "RIX");
  }
}

module.exports = BishopofBinding;
