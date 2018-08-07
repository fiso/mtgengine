"use strict";
const Constants = require ("../../../Constants");
const ElvenRiteBase = require("../setTPR/ElvenRite");

class ElvenRite extends ElvenRiteBase {
  constructor (game) {
    super(game, "Elven Rite", "Stronghold", "STH");
  }
}

module.exports = ElvenRite;
