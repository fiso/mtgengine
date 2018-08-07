"use strict";
const Constants = require ("../../../Constants");
const SlinnVodatheRisingDeepBase = require("../setDOM/SlinnVodatheRisingDeep");

class SlinnVodatheRisingDeep extends SlinnVodatheRisingDeepBase {
  constructor (game) {
    super(game, "Slinn Voda, the Rising Deep", "Dominaria Promos", "PDOM");
  }
}

module.exports = SlinnVodatheRisingDeep;
