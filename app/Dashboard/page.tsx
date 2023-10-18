import Main from "./main";
export default function dashboard() {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center h-fit">
          <Main />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden absolute -top-14 left-2 w-10 h-10"
          ></label>
        </div>
        <div className="drawer-side bt-4 border-white-500 h-fit">
          <ul className="menu p-4 w-64 navv bg-base-200 text-base-content relative lg:h-screen:">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="lg:hidden drawer-overlay absolute top-1 right-1"
            >
              <img
                className="w-10 h-10"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC/ElEQVR4nO1aTWsTYRDekx8HRcGvmx496Elv6k0UQbGXQpN9p4veS4v/QutBURCv/gRt/Th5EY15J1ak2DQGxGp2ZrXWq7XFlUkTE83mYzf7WTowJCHZl3nyPO+8MztrGFu2Se1d/tNeVDyigaZR8SwClzXwigZebfgKKl6Q7+Q3GvjynPVjj5EGq0xUtqNiExU9Q6B1BHb9Oa1roCcInJe1jLjt5ejSTg18TQPV/Afv7VrRFwSeem593BELiOK4fQEVVcMC0AEI6AOCcz5aGQHfjgpAhyt6IMyHCuLVGB/UijE2EPDXi28VHQgFxJxFRzbojh2E25BaRWIYCsSbK/Z+SaNJgcCWzKqvLedQIBCSPRKSk9tNZoFSNCq6l4Lg3f/8jv8Um3zQrqePO+d8nNa0mHjA4O2SeAY6NOXETjpY7OcmT/Zlo1EquCn3zz03fr0AHIp2dkqWfQLBOR25xEzO9QAiVWxwEEVFx2SdEtgnI2dF8ePu/USgUvxfEPIqn6OXF60VzOXdXrIaCQRC8VfM8/H6GlbtKCqi6EFwE8xFL1ndzAYT3P4n3vBiZDY7THDzj3zYAUSqzKwwgS0vezHyPStMYFssHozw6iAXS2o1IjZtOacGBPIz1UDQrJ0JDCSwtIDsVEkLfVS8qdnsihfCT78JMKO7pN/pAAslzcz16EqUWJmhzhJFbihnqmhU9MuzaKzLS9HTzJTxwDPeyVukAZwfurESEAOeA8N4UdHYpmh150fnt3UF0mBlKgWBur2Zp4meIJqspOI2KXQFURn4jqPMJ1IK4ncR+KzhxzTw3RQCueULRJvEikkHjy0v9N3g3QxztX2p2C+KqjJsMkIY9FQSBLFYytuHjTBMxl8JyawgwyYjimGoZI44QGig+5HO3mU+EbHUyr5T7FDsmDwppUJ4e4GX5MRO5AmIem1mcm6ju6Q1/wDq18xIARg4tYZt0huUFF2S25ha8aPGAzTLzYdq6u8Vv5f2VDo7aYpeXP22K/RAtsxIh/0BIAiihu+Th+UAAAAASUVORK5CYII="
              ></img>
            </label>
            <li className="mt-4">
              <a className="h-12 m-3 text-lg flex align-middle bg-purple-600 text-white hover:bg-purple-600">
                <img
                  className="w-5 h-5"
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4zMzMzMyw1LjMzMzMzKSI+PHBhdGggZD0iTTIzLjk1MTE3LDRjLTAuMzE5ODQsMC4wMTA5MiAtMC42Mjc4MSwwLjEyMzg0IC0wLjg3ODkxLDAuMzIyMjdsLTE0LjIxMjg5LDExLjE5NzI3Yy0xLjgwMzksMS40MjE2MyAtMi44NTkzNywzLjU5Mzk4IC0yLjg1OTM3LDUuODkwNjN2MTkuMDg5ODRjMCwxLjM2MzU5IDEuMTM2NDEsMi41IDIuNSwyLjVoMTBjMS4zNjM1OSwwIDIuNSwtMS4xMzY0MSAyLjUsLTIuNXYtMTBjMCwtMC4yOTUwNCAwLjIwNDk2LC0wLjUgMC41LC0wLjVoNWMwLjI5NTA0LDAgMC41LDAuMjA0OTYgMC41LDAuNXYxMGMwLDEuMzYzNTkgMS4xMzY0MSwyLjUgMi41LDIuNWgxMGMxLjM2MzU5LDAgMi41LC0xLjEzNjQxIDIuNSwtMi41di0xOS4wODk4NGMwLC0yLjI5NjY1IC0xLjA1NTQ4LC00LjQ2ODk5IC0yLjg1OTM3LC01Ljg5MDYybC0xNC4yMTI4OSwtMTEuMTk3MjdjLTAuMjc3MzgsLTAuMjE5MTIgLTAuNjIzMjQsLTAuMzMzMjYgLTAuOTc2NTYsLTAuMzIyMjd6TTI0LDcuNDEwMTZsMTMuMjg1MTYsMTAuNDY2OGMxLjA4NDEsMC44NTQzNyAxLjcxNDg0LDIuMTUzODUgMS43MTQ4NCwzLjUzMzJ2MTguNTg5ODRoLTl2LTkuNWMwLC0xLjkxNDk1IC0xLjU4NTA1LC0zLjUgLTMuNSwtMy41aC01Yy0xLjkxNDk1LDAgLTMuNSwxLjU4NTA1IC0zLjUsMy41djkuNWgtOXYtMTguNTg5ODRjMCwtMS4zNzkzNSAwLjYzMDc0LC0yLjY3ODgzIDEuNzE0ODQsLTMuNTMzMnoiPjwvcGF0aD48L2c+PC9nPgo8L3N2Zz4="
                />
                Home
              </a>
            </li>
            <li>
              <a className="h-12 m-3 text-lg text-white flex align-middle">
                Sidebar Item 2
              </a>
            </li>
            <li>
              <a className="h-12 m-3 text-lg text-white flex align-middle">
                Sidebar Item 3
              </a>
            </li>
            <li className="mt-auto">
              <a className="h-12 m-3 mb-1 text-lg grid place-content-center bg-purple-600 hover:bg-purple-600">
                logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
