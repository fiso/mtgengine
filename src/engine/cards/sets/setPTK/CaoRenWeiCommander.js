"use strict";
const Constants = require ("../../../Constants");
const CaoRenWeiCommanderBase = require("../setPZ2/CaoRenWeiCommander");

class CaoRenWeiCommander extends CaoRenWeiCommanderBase {
  constructor (game) {
    super(game, "Cao Ren, Wei Commander", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = CaoRenWeiCommander;
