"use strict";
const Constants = require ("../../../Constants");
const IcatianJavelineersBase = require("../setATH/IcatianJavelineers");

class IcatianJavelineers extends IcatianJavelineersBase {
  constructor(game) {
    super(game, "Icatian Javelineers", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = IcatianJavelineers;
