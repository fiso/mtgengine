"use strict";
const Constants = require ("../../../Constants");
const ElendatheDuskRoseBase = require("../setPRIX/ElendatheDuskRose");

class ElendatheDuskRose extends ElendatheDuskRoseBase {
  constructor (game) {
    super(game, "Elenda, the Dusk Rose", "Rivals of Ixalan", "RIX");
  }
}

module.exports = ElendatheDuskRose;
