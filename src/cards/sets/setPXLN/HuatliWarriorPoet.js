"use strict";
const Constants = require ("../../../Constants");
const HuatliWarriorPoetBase = require("../setXLN/HuatliWarriorPoet");

class HuatliWarriorPoet extends HuatliWarriorPoetBase {
  constructor (game) {
    super(game, "Huatli, Warrior Poet", "Ixalan Promos", "PXLN");
  }
}

module.exports = HuatliWarriorPoet;
