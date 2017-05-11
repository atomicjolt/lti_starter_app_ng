import _      from 'lodash';
import assets from './assets';

jest.mock('./assets');
describe('assets', () => {
  describe('default functionality', () => {
    it('Provides the url for an asset', () => {
      const jpg = assets('./images/atomicjolt.jpg');
      expect(jpg).toBe('data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzExMSA3OS4xNTgzMjUsIDIwMTUvMDkvMTAtMDE6MTA6MjAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhBMDlGMEVGQjBEODExRTU4Q0Y4RTJCOTU4QTNFMzM2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhBMDlGMEYwQjBEODExRTU4Q0Y4RTJCOTU4QTNFMzM2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEEwOUYwRURCMEQ4MTFFNThDRjhFMkI5NThBM0UzMzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEEwOUYwRUVCMEQ4MTFFNThDRjhFMkI5NThBM0UzMzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYF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');

      const svg = assets('./images/atomicjolt.svg');
      expect(svg).toBe('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii0zOTIgNDc3LjcgMjE0IDQ3LjMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTM5MiA0NzcuNyAyMTQgNDcuMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZDQ0MwRjt9DQo8L3N0eWxlPg0KPGc+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTS0yMTcuNCw0OTEuNWM1LjEtMC4xLDkuMiwzLjksOS4zLDlzLTMuOSw5LjEtOS4xLDkuMmMtNS4yLDAuMS05LjItMy44LTkuMy05DQoJCUMtMjI2LjYsNDk1LjQtMjIyLjgsNDkxLjYtMjE3LjQsNDkxLjV6IE0tMjExLjgsNTAwLjZjMC0xLjItMC4zLTIuMy0xLTMuM2MtMi4yLTMuNS02LjktMy42LTktMC4xYy0xLjQsMi4yLTEuMiw1LjMsMC4zLDcuMw0KCQljMS44LDIuNSw1LjMsMi44LDcuNiwwLjhDLTIxMi41LDUwNC0yMTEuOSw1MDIuNC0yMTEuOCw1MDAuNnoiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTI0Ni4zLDUwNC40bDIuNCwxLjljMC4xLDAuMSwwLjEsMC4zLDAsMC40Yy0yLjMsMi41LTYuMiwzLjktMTAsMi41Yy0zLjktMS40LTYuNC01LjEtNi4yLTkuMQ0KCQljMC4yLTMuOCwzLjItNy4yLDcuMi04LjNjMy4yLTAuOCw3LjEsMC40LDguNywyLjdjMC4xLDAuMSwwLDAuMy0wLjEsMC4zbC0yLjQsMS45Yy0wLjEsMC4xLTAuMywwLjEtMC40LTAuMQ0KCQljLTAuMS0wLjEtMC4xLTAuMi0wLjItMC4zYy0yLjYtMi44LTUuOC0xLjktNy42LDAuMmMtMi4zLDIuNi0yLDYuNywwLjcsOC45YzIuMSwxLjcsNC44LDEuNSw2LjgtMC40YzAuMi0wLjIsMC40LTAuNCwwLjctMC42DQoJCUMtMjQ2LjUsNTA0LjMtMjQ2LjQsNTA0LjMtMjQ2LjMsNTA0LjR6Ii8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTS0yMDQuOSw0OTEuOGgzYzAuMiwwLDAuMywwLjEsMC4zLDAuM3YxNGMwLDAuMiwwLjEsMC4zLDAuMywwLjNoNy40YzAuMiwwLDAuMywwLjEsMC4zLDAuM3YyLjMNCgkJYzAsMC4yLTAuMSwwLjMtMC4zLDAuM0gtMjA1Yy0wLjIsMC0wLjMtMC4xLTAuMy0wLjN2LTE2LjlDLTIwNS4zLDQ5Mi0yMDUuMSw0OTEuOC0yMDQuOSw0OTEuOHoiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTI4NS41LDUwOS42aC0zLjRjLTAuMSwwLTAuMS0wLjEtMC4xLTAuMXYtMTcuNmMwLTAuMSwwLjEtMC4yLDAuMi0wLjFjMywzLjEsNS45LDYuMSw4LjgsOS4xDQoJCWMwLDAuMSwwLjEsMC4xLDAuMiwwYzIuOS0zLDUuOC02LDguNy05LjFjMC4xLTAuMSwwLjIsMCwwLjIsMC4xdjE3LjZjMCwwLjEtMC4xLDAuMS0wLjEsMC4xaC0zLjNjLTAuMSwwLTAuMS0wLjEtMC4xLTAuMXYtOS4yDQoJCWMtMC4yLTAuMS0wLjItMC4xLTAuMy0wLjFjLTEuNywxLjctMy40LDMuNC01LjEsNS4yYzAsMC0wLjEsMC0wLjIsMGMtMS43LTEuNy0zLjQtMy41LTUuMS01LjNjLTAuMS0wLjEtMC4yLDAtMC4yLDAuMXY5LjQNCgkJQy0yODUuNCw1MDkuNS0yODUuNCw1MDkuNi0yODUuNSw1MDkuNnoiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTMwMS4zLDQ5MS41YzUuMS0wLjEsOS4yLDMuOSw5LjMsOXMtMy45LDkuMS05LjEsOS4yYy01LjIsMC4xLTkuMi0zLjgtOS4zLTkuMQ0KCQlDLTMxMC41LDQ5NS40LTMwNi43LDQ5MS42LTMwMS4zLDQ5MS41eiBNLTMwNi44LDUwMC42YzAuMSwwLjYsMC4xLDEuMywwLjMsMS45YzAuNiwyLDEuOCwzLjQsMy44LDRjMiwwLjUsMy43LDAsNS4yLTEuNQ0KCQljMi4xLTIuMiwyLjItNS44LDAuMy04LjJjLTEuMy0xLjYtMy0yLjQtNS4yLTJDLTMwNSw0OTUuMy0zMDYuNyw0OTcuNi0zMDYuOCw1MDAuNnoiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTMzMi44LDQ5MS40YzIuOCw1LjksNS42LDExLjcsOC40LDE3LjVjMC4xLDAuMSwwLDAuMi0wLjEsMC4yYy0wLjcsMC0xLjMsMC0yLDBjLTAuNSwwLTEuMiwwLjItMS41LTAuMQ0KCQljLTAuNC0wLjItMC41LTAuOS0wLjctMS40Yy0wLjMtMC43LTAuNi0xLjQtMC45LTJjLTAuMS0wLjItMC4zLTAuMy0wLjUtMC4zYy0xLjksMC0zLjcsMC01LjYsMGMtMC4zLDAtMC41LDAuMS0wLjYsMC40DQoJCWMtMC40LDEtMC44LDEuOS0xLjIsMi45Yy0wLjEsMC4zLTAuNSwwLjUtMC44LDAuNWMtMSwwLTIsMC0zLDBjLTAuMSwwLTAuMi0wLjEtMC4xLTAuMmMyLjgtNS45LDUuNi0xMS42LDguNC0xNy41DQoJCUMtMzMzLDQ5MS4zLTMzMi44LDQ5MS4zLTMzMi44LDQ5MS40eiBNLTMzMyw0OTguNGwtMS43LDMuOGMwLDAuMSwwLDAuMiwwLjEsMC4yaDMuM2MwLjEsMCwwLjItMC4xLDAuMS0wLjJsLTEuNi0zLjgNCgkJQy0zMzIuOCw0OTguMy0zMzMsNDk4LjMtMzMzLDQ5OC40eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMzI1LjEsNDk0LjZ2LTIuNWMwLTAuMSwwLjEtMC4yLDAuMi0wLjJoMTMuMWMwLjEsMCwwLjIsMC4xLDAuMiwwLjJ2Mi41YzAsMC4xLTAuMSwwLjItMC4yLDAuMmgtNC41DQoJCWMtMC4xLDAtMC4yLDAuMS0wLjIsMC4ydjE0LjFjMCwwLjEtMC4xLDAuMi0wLjIsMC4yaC0zLjJjLTAuMSwwLTAuMi0wLjEtMC4yLTAuMlY0OTVjMC0wLjEtMC4xLTAuMi0wLjItMC4yaC00LjUNCgkJQy0zMjUsNDk0LjgtMzI1LjEsNDk0LjctMzI1LjEsNDk0LjZ6Ii8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTS0yMzMsNDkxLjdoMy4yYzAuMSwwLDAuMywwLjEsMC4zLDAuM2MwLDAuMSwwLDAuMiwwLDAuMmMwLDQuOSwwLDEwLjMsMCwxNS4zYzAsMy44LTIuNSw3LTYuMSw3LjkNCgkJYy0wLjYsMC4yLTEuMywwLjItMiwwLjNjLTAuMiwwLTAuMy0wLjEtMC4zLTAuM3YtMi42YzAtMC4xLDAuMS0wLjMsMC4yLTAuM2MwLjMsMCwwLjYsMCwwLjktMC4xYzEuOC0wLjQsMy4yLTIsMy40LTQNCgkJYzAtMC40LDAuMS0wLjksMC4xLTEuM2MwLTQuOCwwLTEwLDAtMTQuOHYtMC40Qy0yMzMuMyw0OTEuOS0yMzMuMiw0OTEuNy0yMzMsNDkxLjd6Ii8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTS0yNjYuNiw0OTEuOGgzLjJjMC4xLDAsMC4yLDAuMSwwLjIsMC4ydjE3LjFjMCwwLjEtMC4xLDAuMi0wLjIsMC4yaC0zLjJjLTAuMSwwLTAuMi0wLjEtMC4yLTAuMlY0OTINCgkJQy0yNjYuOCw0OTEuOS0yNjYuOCw0OTEuOC0yNjYuNiw0OTEuOHoiLz4NCgk8Zz4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTS0xODkuNCw0OTQuOGgtNC41Yy0wLjEsMC0wLjItMC4xLTAuMi0wLjJ2LTIuNWMwLTAuMSwwLjEtMC4yLDAuMi0wLjJoMTMuMWMwLjEsMCwwLjIsMC4xLDAuMiwwLjJ2Mi41DQoJCQljMCwwLjEtMC4xLDAuMi0wLjIsMC4yaC00LjVjLTAuMSwwLTAuMiwwLjEtMC4yLDAuMnYxNC4xYzAsMC4xLTAuMSwwLjItMC4yLDAuMmgtMy4yYy0wLjEsMC0wLjItMC4xLTAuMi0wLjJWNDk1DQoJCQlDLTE4OS4xLDQ5NC45LTE4OS4yLDQ5NC44LTE4OS40LDQ5NC44eiIvPg0KCTwvZz4NCjwvZz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMzYyLDQ4NS44bC04LjctN2MtMC4xLTAuMS0wLjItMC4xLTAuMywwbC0xOC4zLDI2LjVjLTAuMSwwLjEsMCwwLjIsMCwwLjJsMTUsMTZjMCwwLjEsMC4xLDAuMSwwLjIsMC4xDQoJbDE5LjItNS4xYzAuMSwwLDAuMi0wLjEsMC4xLTAuMmwtNy4zLTMwLjRDLTM2MS45LDQ4NS45LTM2Miw0ODUuOS0zNjIsNDg1Ljh6IE0tMzc5LjcsNTEyLjVsMTEuMi0xNmMwLjEtMC4xLDAuMy0wLjEsMC40LDAuMQ0KCWwyLjcsMTIuOWMwLDAuMSwwLDAuMi0wLjEsMC4ybC0xMy4zLDMuN2MtMC4xLDAtMC4xLDAtMC4yLTAuMWwtMC41LTAuNUMtMzc5LjgsNTEyLjctMzc5LjgsNTEyLjYtMzc5LjcsNTEyLjV6IE0tMzY3LjMsNDkxDQoJTC0zNjcuMyw0OTFsLTEuNy03LjdjMC0wLjIsMC4yLTAuMywwLjMtMC4ybDQuMywzLjRjMC4xLDAuMSwwLjEsMC4yLDAsMC4zTC0zNjcuMyw0OTFMLTM2Ny4zLDQ5MXogTS0zNzEuMSw0ODMuM2wyLjIsMTANCgljMCwwLjEsMCwwLjEsMCwwLjJsLTEyLjIsMTcuNGMtMC4xLDAuMS0wLjIsMC4xLTAuMywwbC01LjEtNS41Yy0wLjEtMC4xLTAuMS0wLjIsMC0wLjJsMTUuMi0yMg0KCUMtMzcxLjQsNDgzLjEtMzcxLjEsNDgzLjEtMzcxLjEsNDgzLjN6IE0tMzc3LjIsNTE1bDEzLjktMy45YzAuMSwwLDAuMi0wLjEsMC4xLTAuMmwtMy41LTE3YzAtMC4xLDAtMC4xLDAtMC4ybDMuMS00LjQNCgljMC4xLTAuMSwwLjMtMC4xLDAuNCwwLjFsNi4yLDI1LjVjMCwwLjEsMCwwLjItMC4xLDAuMmwtMTYuMSw0LjNjLTAuMSwwLTAuMSwwLTAuMi0wLjFsLTMuOC00Qy0zNzcuNCw1MTUuMi0zNzcuNCw1MTUtMzc3LjIsNTE1eiINCgkvPg0KPC9zdmc+DQo=');

      const big = assets('./images/atomicjolt.png');
      expect(big).toBe('/_karma_webpack_/atomicjolt-92b4dadbb4b4c6bc62bcd225dbefa9d3.png');
    });
  });

  describe('context', () => {
    it('gets the context object', () => {
      expect(_.includes(assets.keys(), './images/atomicjolt.jpg')).toBe(true);
    });
  });
});
