"use strict";
const Constants = require ("../../../Constants");
const CravenGiantBase = require("../setPOR/CravenGiant");

class CravenGiant extends CravenGiantBase {
  constructor(game) {
    super(game, "Craven Giant", "Stronghold", "STH");
  }
}

module.exports = CravenGiant;
