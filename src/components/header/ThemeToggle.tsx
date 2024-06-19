import {Menu, MenuButton, MenuItem, MenuItems, Transition} from "@headlessui/react";
import {Icon} from "@tremor/react";
import {RiComputerLine, RiMoonLine, RiSunLine} from "@remixicon/react";
import {useTheme} from "../../hooks/useTheme.tsx";
import {ComponentType} from "react";

type Theme = "dark" | "light" | "system";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const THEMES: { name: string; icon: ComponentType; value: Theme }[] = [
    { name: "Dark", icon: RiMoonLine, value: "dark" },
    { name: "Light", icon: RiSunLine, value: "light" },
    { name: "System", icon: RiComputerLine, value: "system" }
  ];

  return (
    <Menu>
      <MenuButton className="inline-flex items-center rounded-md bg-gray-200 dark:bg-[#131A2B] shadow dark:border dark:border-white/10">
        <Icon icon={THEMES.find(t => t.value === theme)?.icon || RiComputerLine} className="size-8 text-dark dark:text-white"/>
      </MenuButton>
      <Transition
        enter="transition ease-out duration-75"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <MenuItems
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/10 bg-gray-200 dark:bg-gray-900"
        >
          {THEMES.map(({ name, icon, value }) => (
            <MenuItem key={value}>
              <button
                onClick={() => toggleTheme(value)}
                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3">
                  <Icon icon={icon} className="text-dark dark:text-white"/>
                  <span className="text-dark dark:text-white">{name}</span>
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
};
